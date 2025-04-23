import { NextResponse } from 'next/server';
import sql from '@/app/lib/data';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const [user] = await sql`
      SELECT * FROM users WHERE name = ${username};
    `;

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
    }

    return NextResponse.json({ message: `Welcome back, ${user.name}!`, role: user.role });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
