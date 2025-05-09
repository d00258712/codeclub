import { NextResponse } from 'next/server';
import sql from '@/app/lib/data';

export async function GET(_: Request, context: { params: { id: string } }) {
  try {
    const id = context.params.id;

    const result = await sql`
      SELECT * FROM events WHERE id = ${id};
    `;

    if (result.length === 0) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    return NextResponse.json({ event: result[0] });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}