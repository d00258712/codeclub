'use client';

import { useEffect, useState } from 'react';

export default function EventBookingPage({ params }: { params: { id: string } }) {
  const [event, setEvent] = useState<any>(null);
  const [ticketType, setTicketType] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetch(`/api/events/${params.id}`);
      const data = await res.json();
      setEvent(data.event);
    };
    fetchEvent();
  }, [params.id]);

  const bookTicket = async () => {
    const res = await fetch('/api/book', {
      method: 'POST',
      body: JSON.stringify({ eventId: params.id, ticketType }),
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  };

  if (!event) return <p>Loading event...</p>;

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">{event.name}</h1>
      <p>{event.date} - {event.start_time} to {event.end_time}</p>
      <p>{event.details}</p>

      <h2 className="text-lg font-semibold mt-6">Book your ticket</h2>
      {event.tickets.map((ticket: any, index: number) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name="ticket"
              value={ticket.type}
              onChange={(e) => setTicketType(e.target.value)}
              className="mr-2"
            />
            {ticket.type} - {ticket.spaces} spaces
          </label>
        </div>
      ))}

      <button
        onClick={bookTicket}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Book Ticket
      </button>

      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}
