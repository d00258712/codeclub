// app/api/events/route.ts
import { NextResponse } from 'next/server';
import sql from '@/app/lib/data';

export async function POST(req: Request) {
  try {
    const { eventName, eventDate, startTime, endTime, details, tickets } =
      await req.json();

    // Here we map your form fields into the columns we actually have:
    const [event] = await sql`
      INSERT INTO events
        (title, description, date, time, total_tickets, created_by)
      VALUES
        (${eventName}, ${details}, ${eventDate}, ${startTime}, ${tickets.length}, 1)
      RETURNING *;
    `;

    return NextResponse.json(
      { message: '✅ Event created successfully!', event },
      { status: 201 }
    );
  } catch (error) {
    console.error('Failed to create event:', error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
