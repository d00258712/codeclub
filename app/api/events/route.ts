import { NextResponse } from 'next/server';
import sql from '@/app/lib/data';

// Handle both POST and GET requests on the same route

// Handle event creation (POST request)
export async function POST(req: Request) {
  try {
    // Destructure the incoming data from the request
    const { eventName, eventDate, startTime, endTime, details, tickets } = await req.json();

    // Log the data to see what we are receiving (debugging purposes)
    console.log('Received event data:', { eventName, eventDate, startTime, endTime, details, tickets });

    // Insert the event into the database
    const [event] = await sql`
      INSERT INTO events
        (title, description, date, time, total_tickets, created_by)
      VALUES
        (${eventName}, ${details}, ${eventDate}, ${startTime}, ${tickets.length}, 1)  -- Assuming created_by is 1 for now
      RETURNING *;
    `;

    // Log the created event for debugging purposes
    console.log('Created event:', event);

    // Send a successful response with the created event
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

// Handle event listing (GET request)
export async function GET() {
  try {
    // Fetch all events from the database
    const events = await sql`
      SELECT * FROM events;
    `;

    // If no events, return an empty array
    if (events.length === 0) {
      return NextResponse.json({ message: 'No events available.' });
    }

    // Return the list of events
    return NextResponse.json(events);
  } catch (error) {
    console.error('Failed to fetch events:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
