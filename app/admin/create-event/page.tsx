'use client';

import { useState } from 'react';

export default function CreateEventPage() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [details, setDetails] = useState('');
  const [tickets, setTickets] = useState([
    { name: '', spaces: '' },
    { name: '', spaces: '' },
    { name: '', spaces: '' },
  ]);
  const [message, setMessage] = useState('');

  function handleTicketChange(index: number, field: 'name' | 'spaces', value: string) {
    const updated = [...tickets];
    updated[index][field] = value;
    setTickets(updated);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const payload = {
      eventName,
      eventDate,
      startTime,
      endTime,
      details,
      tickets,
    };

    const res = await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    if (text) {
      const data = JSON.parse(text);
      setMessage(data.message || data.error);
    } else {
      setMessage('❌ Server sent no response.');
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Create an Event</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Event Name</label>
          <input
            className="w-full border rounded p-2"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Date</label>
          <input
            type="date"
            className="w-full border rounded p-2"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-medium">Start Time</label>
            <input
              className="w-full border rounded p-2"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium">End Time</label>
            <input
              className="w-full border rounded p-2"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-medium">Details</label>
          <textarea
            className="w-full border rounded p-2"
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </div>

        <div className="bg-gray-100 p-4 rounded space-y-2">
          <h2 className="font-semibold">🎫 Tickets</h2>
          {tickets.map((ticket, idx) => (
            <div key={idx} className="flex gap-2">
              <input
                className="flex-1 border p-2 rounded"
                placeholder="Ticket name"
                value={ticket.name}
                onChange={(e) => handleTicketChange(idx, 'name', e.target.value)}
              />
              <input
                className="w-28 border p-2 rounded"
                placeholder="Spaces"
                type="number"
                value={ticket.spaces}
                onChange={(e) => handleTicketChange(idx, 'spaces', e.target.value)}
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded py-2 font-semibold"
        >
          Publish Event
        </button>
      </form>

      {message && (
        <p className="mt-4 p-2 bg-gray-100 rounded">
          {message}
        </p>
      )}
    </div>
  );
}
