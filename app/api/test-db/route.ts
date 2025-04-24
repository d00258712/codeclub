// app/api/test-db/route.ts
import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined.');
}
const sql = neon(process.env.DATABASE_URL);

export async function GET() {
  // Check existence of users, events, and bookings tables
  const checks = await Promise.all([
    sql`SELECT to_regclass('public.users') AS name`,
    sql`SELECT to_regclass('public.events') AS name`,
    sql`SELECT to_regclass('public.bookings') AS name`,
  ]);

  const tables = {
    users: checks[0][0].name || 'missing',
    events: checks[1][0].name || 'missing',
    bookings: checks[2][0].name || 'missing',
  };

  return NextResponse.json({ tables });
}