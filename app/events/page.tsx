'use client';

import { useEffect, useState } from 'react';

export default function EventsListPage() {
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchEvents() {
      const res = await fetch('/api/events');
      const text = await res.text();

      if (text) {
        const data = JSON.parse(text);
        setEvents(data);
      } else {
        setMessage('❌ No event data received.');
      }
    }

    fetchEvents();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>

      {message && <p className="text-red-500">{message}</p>}
      {events.length === 0 && !message && <p>No events available.</p>}

      {events.map((event: any) => (
        <div key={event.id} className="border p-4 rounded mb-4 bg-white shadow">
          <h2 className="text-xl font-semibold">{event.name}</h2>
          <p className="text-sm text-gray-600">
            📅 {event.date} | {event.start_time} - {event.end_time}
          </p>
          <p className="mt-2">{event.details}</p>

          <a
            href={`/events/${event.id}`}
            className="inline-block mt-4 text-blue-600 underline"
          >
            View & Book
          </a>
        </div>
      ))}
    </div>
  );
}
