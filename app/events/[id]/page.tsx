'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function EventBookingPage() {
  const { id } = useParams() as { id: string };
  const [event, setEvent] = useState<any>(null);
  const [ticketType, setTicketType] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchEvent() {
      try {
        const res = await fetch(`/api/events/${id}`);
        const text = await res.text();
        if (text) {
          const data = JSON.parse(text);
          setEvent(data.event);
        }
      } catch (error) {
        console.error('Failed to fetch event:', error);
        setMessage('❌ Failed to load event.');
      }
    }

    if (id) fetchEvent();
  }, [id]);

  const bookTicket = async () => {
    const res = await fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventId: id, ticketType }),
    });

    const text = await res.text();
    const data = text ? JSON.parse(text) : {};
    setMessage(data.message || data.error || '❌ Something went wrong.');
  };

  if (!event) return <p className="p-4">Loading event...</p>;

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">{event.name}</h1>
      <p className="text-gray-600">
        {event.date} | {event.start_time} – {event.end_time}
      </p>
      <p>{event.details}</p>

      <h2 className="mt-6 font-semibold">🎫 Choose a ticket:</h2>
      {event.tickets && typeof event.tickets === 'object' ? (
        Object.entries(event.tickets).map(([type, count], i) => (
          <label key={i} className="block mt-2">
            <input
              type="radio"
              name="ticket"
              value={type}
              onChange={(e) => setTicketType(e.target.value)}
              className="mr-2"
            />
            {type} ({count} left)
          </label>
        ))
      ) : (
        <p>No tickets available.</p>
      )}

      <button
        onClick={bookTicket}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Book Ticket
      </button>

      {message && <p className="text-green-600 mt-4">{message}</p>}
    </div>
  );
}
