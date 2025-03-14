"use client"; 

import { useEffect, useState } from "react";

async function storeComponents() {
  const components = [
    {
      name: "Container",
      code: `export default function Container() {
        return <div className="p-4 bg-green-600">Hello from Container</div>;
      };`
    },
    {
      name: "Navbar",
      code: `export default function Navbar() {
        return <nav className="p-4 bg-blue-600">My Navbar</nav>;
      };`
    },
    {
      name: "ContainerPy",
      code: `export default function ContainerPy() {
        return <div className="p-4 bg-yellow-600">Python Section</div>;
      };`
    },
    {
      name: "ContainerWeb",
      code: `export default function ContainerWeb() {
        return <div className="p-4 bg-red-600">Web Design Section</div>;
      };`
    },
    {
      name: "ContainerSRC",
      code: `export default function ContainerSRC() {
        return <div className="p-4 bg-purple-600">Scratch Section</div>;
      };`
    }
  ];

  for (const component of components) {
    try {
      const res = await fetch("/api/components", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(component),
      });

      const data = await res.json();
      console.log(`✅ Stored: ${component.name}`, data);
    } catch (err) {
      console.error(`❌ Error storing ${component.name}:`, err);
    }
  }
}

export default function SetupPage() {
  const [status, setStatus] = useState("Storing components...");

  useEffect(() => {
    storeComponents()
      .then(() => setStatus("✅ Components stored successfully!"))
      .catch(() => setStatus("❌ Failed to store components."));
  }, []);

  return <div className="p-8 text-center">{status}</div>;
}
