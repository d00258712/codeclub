'use client';
import { useEffect, useState } from 'react';

export default function ComponentList() {
  const [components, setComponents] = useState<{ name: string; code: string }[]>([]);

  useEffect(() => {
    async function fetchComponents() {
      const res = await fetch('/api/components');
      const data = await res.json();
      setComponents(data);
    }
    fetchComponents();
  }, []);

  return (
    <div>
      <h1>Stored Components</h1>
      {components.map((component) => (
        <div key={component.name}>
          <h2>{component.name}</h2>
          <pre>{component.code}</pre> {/* Shows stored code */}
        </div>
      ))}
    </div>
  );
}
