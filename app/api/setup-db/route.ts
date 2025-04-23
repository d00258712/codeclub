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

    await sql`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'coder'
  );
`;
await sql`
  CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    time TEXT NOT NULL,
    total_tickets INTEGER NOT NULL,
    created_by INTEGER REFERENCES users(id)
  );
`;

await sql`
  CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    event_id INTEGER REFERENCES events(id),
    user_id INTEGER REFERENCES users(id),
    booked_at TIMESTAMP DEFAULT NOW()
  );
`;



    return NextResponse.json({ message: "Database setup complete!" });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
