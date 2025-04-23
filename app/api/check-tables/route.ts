import { NextResponse } from 'next/server';
import sql from '@/app/lib/data';

export async function GET() {
  // Query Postgres metadata for all user tables in public schema
  const tables = await sql`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
      AND table_type = 'BASE TABLE';
  `;
  return NextResponse.json(tables.map((row: any) => row.table_name));
}
