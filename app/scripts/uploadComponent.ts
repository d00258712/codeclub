import fetch from 'node-fetch';

async function uploadComponent() {
  const response = await fetch('http://localhost:3000/api/components', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Container',
      code: `export default function Container() {
        return <div className="bg-green-600 p-4">Hello from Container</div>;
      };`,
    }),
  });

  const data = await response.json();
  console.log('Response:', data);
}

uploadComponent().catch(console.error);
