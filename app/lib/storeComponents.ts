async function storeComponents() {
    const components = [
      { name: "Container", code: "<div>Hello from Container</div>" },
      { name: "Navbar", code: "<nav>My Navbar</nav>" },
      { name: "ContainerPy", code: "<div>Python Section</div>" },
      { name: "ContainerWeb", code: "<div>Web Design Section</div>" },
      { name: "ContainerSRC", code: "<div>Scratch Section</div>" },
    ];
  
    for (const component of components) {
      try {
        const res = await fetch("http://localhost:3000/api/components", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(component),
        });
  
        const data = await res.json();
        console.log(`✅ Stored: ${component.name}`, data);
      } catch (error) {
        console.error(`❌ Failed to store ${component.name}:`, error);
      }
    }
  }
  
  storeComponents();
  