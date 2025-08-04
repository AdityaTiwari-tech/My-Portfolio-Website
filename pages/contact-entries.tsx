import { useEffect, useState } from 'react';

type Entry = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};

export default function ContactEntries() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/contact-entries')
      .then(res => res.json())
      .then(data => {
        console.log(data); // Check if this is an array
        setEntries(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Contact Form Entries</h2>
        {loading ? (
          <div>Loading...</div>
        ) : entries.length === 0 ? (
          <div>No entries found.</div>
        ) : (
          <div className="space-y-6">
            {entries.map((entry: any) => (
              <div key={entry.id} className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <div className="font-semibold text-indigo-600">{entry.name}</div>
                <div className="text-gray-600">{entry.email}</div>
                <div className="text-gray-800 font-bold">{entry.subject}</div>
                <div className="text-gray-700">{entry.message}</div>
                <div className="text-xs text-gray-400 mt-2">{new Date(entry.createdAt).toLocaleString()}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}