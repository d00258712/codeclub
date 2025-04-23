import { NextResponse } from 'next/server';
import sql from '@/app/lib/data';

export async function POST(req: Request) {
  try {
    const { eventName, eventDate, startTime, endTime, details, tickets } = await req.json();

    await sql`
      INSERT INTO events (name, date, start_time, end_time, details)
      VALUES (${eventName}, ${eventDate}, ${startTime}, ${endTime}, ${details});
    `;

    // ✅ Send a proper JSON response back
    return NextResponse.json({ message: '✅ Event created successfully!' });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
