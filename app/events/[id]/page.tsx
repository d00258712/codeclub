'use client';

import { useEffect, useState } from 'react';

export default function EventBookingPage({ params }: any) {
  const [event, setEvent] = useState<any>(null);
  const [ticketType, setTicketType] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchEvent() {
      const res = await fetch(`/api/events/${params.id}`);
      const text = await res.text();
      if (text) {
        const data = JSON.parse(text);
        setEvent(data.event);
      }
    }
    fetchEvent();
  }, [params.id]);

  if (!event) return <p>Loading...</p>;

  const bookTicket = async () => {
    const res = await fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventId: params.id, ticketType }),
    });
    const text = await res.text();
    const data = text ? JSON.parse(text) : {};
    setMessage(data.message || data.error);
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">{event.name}</h1>
      <p>{event.date} {event.start_time}–{event.end_time}</p>
      <p>{event.details}</p>

      <h2 className="font-semibold">Choose Ticket</h2>
      {event.tickets?.map((t: any, i: number) => (
        <label key={i} className="block">
          <input
            type="radio"
            name="ticket"
            value={t.name}
            onChange={(e) => setTicketType(e.target.value)}
          />
          {t.name} ({t.spaces} left)
        </label>
      ))}

      <button
        onClick={bookTicket}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Book Ticket
      </button>

      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
