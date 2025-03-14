"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

export default function HomePage() {
  const [components, setComponents] = useState<{ name: string; code: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchComponents() {
      try {
        const res = await fetch("/api/components", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();
        setComponents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
        console.error("❌ Error fetching components:", err);
      }
    }

    fetchComponents();
  }, []);

  return (
    <div className="p-8">
      <Image src="/code_club_logo.jpg" alt="Code Logo" width={100} height={100} />
      <h1 className="text-2xl font-bold">Dynamic Components</h1>

      {error && <p className="text-red-500">❌ {error}</p>}

      {components.map(({ name, code }, index) => {
        try {
          // Convert stored string into a React component using Blob
          const blob = new Blob([code], { type: "application/javascript" });
          const url = URL.createObjectURL(blob);

          const Component = dynamic(() => import(/* @vite-ignore */ url), { ssr: false });

          return (
            <div key={index} className="border p-4 my-4 bg-gray-100 rounded-lg">
              <h2 className="text-lg font-bold">{name}</h2>
              <Component />
            </div>
          );
        } catch (err) {
          console.error(`❌ Error rendering ${name}:`, err);
          return (
            <div key={index} className="border p-4 my-4 bg-red-100 rounded-lg">
              <h2 className="text-lg font-bold">{name}</h2>
              <p className="text-red-500">Error rendering this component.</p>
            </div>
          );
        }
      })}
    </div>
  );
}
