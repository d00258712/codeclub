import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function saveComponent(name: string, code: string) {
  try {
    await sql`
      INSERT INTO components (name, code) VALUES (${name}, ${code})
    `;
    return { message: 'Component saved successfully!' };
  } catch (error) {
    console.error('Error saving component:', error);
    throw error;
  }
}

export default sql;
