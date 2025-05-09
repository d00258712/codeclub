// app/api/setup-db/route.ts
import { NextResponse } from "next/server";
import sql from "@/app/lib/data";

export async function GET() {
  try {
    // … your DROP and CREATE TABLE calls …

    // Create one default user with ID = 1
    console.log(" • seeding a default user");
    await sql`
      INSERT INTO users (name, email, password)
      VALUES ('Admin', 'Admin@localhost', '1')
      ON CONFLICT DO NOTHING
    `;

    await sql`
  ALTER TABLE events
  ADD COLUMN IF NOT EXISTS tickets JSONB;
`;
    // … rest of your table creation …
    console.log("✅ All tables created and seeded.");
    return NextResponse.json({ message: "Database setup complete!" });
  } catch (error) {
    console.error("❌ Error in setup-db:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
