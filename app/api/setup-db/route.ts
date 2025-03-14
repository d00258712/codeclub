import { NextResponse } from "next/server";
import sql from "@/app/lib/data";

export async function GET() {
  try {
    
    await sql`DROP TABLE IF EXISTS components;`;


    await sql`
      CREATE TABLE IF NOT EXISTS components (
        id SERIAL PRIMARY KEY,
        name TEXT UNIQUE NOT NULL, -- Ensures no duplicate names
        code TEXT NOT NULL
      );
    `;

    return NextResponse.json({ message: "Database setup complete!" });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
