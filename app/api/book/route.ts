import { NextResponse } from 'next/server';
import sql from '@/app/lib/data';

export async function POST(req: Request) {
  try {
    const { eventId, ticketType } = await req.json();

    // Reduce the available spaces
    await sql`
      UPDATE events
      SET tickets = jsonb_set(tickets, 
        '{${ticketType}}', 
        ((tickets->>'${ticketType}')::int - 1)::text::jsonb
      )
      WHERE id = ${eventId};
    `;

    return NextResponse.json({ message: 'Ticket booked successfully!' });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
