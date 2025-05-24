import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async e => {
    debugger;
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/contact', form);
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
  console.error("Error details:", err.response?.data || err.message);  // 👈 log the error
  setStatus('Failed to send message.');
}
  };

  return (
    <div className="w-full px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-violet-600 m-10">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <div className="mb-4">
          <label htmlFor="name" className="font-semibold">Name</label>
          <input type="text" id="name" value={form.name} onChange={handleChange}
            required className="w-full border px-4 py-2 rounded" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="font-semibold">Email</label>
          <input type="email" id="email" value={form.email} onChange={handleChange}
            required className="w-full border px-4 py-2 rounded" />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="font-semibold">Message</label>
          <textarea id="message" value={form.message} onChange={handleChange}
            required className="w-full border px-4 py-2 rounded" rows="5"></textarea>
        </div>

        <button type="submit" className="bg-violet-600 text-white py-2 px-4 rounded">Send Message</button>
        {status && <p className="mt-4 text-green-600">{status}</p>}
      </form>
      {/* Other Branches Section with 2 columns */}
      <section className="max-w-3xl mx-auto bg-white dark:bg-neutral-900 rounded-xl shadow-md p-8 border border-violet-300 dark:border-violet-700 m-10">
        <h2 className="text-3xl font-semibold mb-6 text-violet-600 border-l-4 border-violet-600 pl-4">
          Other Branches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base text-neutral-800 dark:text-neutral-200">
          <div>
            <p className="font-semibold">Varanasi</p>
            <p>varanasi</p>
            <p>Allahabad, Uttar Pradesh</p>
            <p className="mt-1 font-mono text-violet-700">9810687354</p>
          </div>

          <div>
            <p className="font-semibold">Himachal</p>
            <p>Shimla</p>
            <p>Himachal Pradesh</p>
            <p className="mt-1 font-mono text-violet-700">9810123456</p>
          </div>

          <div>
            <p className="font-semibold">Chandigarh</p>
            <p>Sector 17</p>
            <p>Chandigarh</p>
            <p className="mt-1 font-mono text-violet-700">9810987654</p>
          </div>

          <div>
            <p className="font-semibold">Delhi</p>
            <p>Connaught Place</p>
            <p>New Delhi</p>
            <p className="mt-1 font-mono text-violet-700">9810234567</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
