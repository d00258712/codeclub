'use client';

import { useEffect, useState } from 'react';

export default function AdminEventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const res = await fetch('/api/events');
      const data = await res.json();
      setEvents(data);
    }

    fetchEvents();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Events</h1>
        <a href="/admin/create-event" className="bg-black text-white px-4 py-2 rounded-full">
  Create an event
</a>
      </div>

      {/* Filters (optional logic) */}
      <div className="flex gap-4 mb-4">
        <button className="border px-3 py-1 rounded-full text-gray-600">Past events</button>
        <button className="border px-3 py-1 rounded-full text-green-600 border-green-600 bg-green-50">Upcoming events ✅</button>
      </div>

      {/* Event cards */}
      {events.map((event: any) => (
        <div key={event.id} className="border border-green-500 rounded-md p-4 mb-4">
          <h2 className="text-xl font-semibold">{event.name}</h2>
          <p className="text-sm text-gray-600">
            📅 {event.date}, {event.start_time} - {event.end_time}
          </p>
          <p className="text-sm mt-1">🎫 {event.remaining_tickets || '??'} tickets remaining</p>

          <div className="flex gap-2 mt-4">
            <button className="bg-black text-white px-4 py-1 rounded-full">Edit event</button>
            <button className="border px-4 py-1 rounded-full">Manage attendees</button>
            <button className="border px-4 py-1 rounded-full">Cancel event</button>
          </div>
        </div>
      ))}
    </div>
  );
}
