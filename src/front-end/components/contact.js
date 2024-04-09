import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez gérer l'envoi du formulaire, par exemple en envoyant les données à une API ou en les enregistrant dans une base de données.
    console.log({ name, email, subject, message });
  };
  return (
    <div className="m-auto max-w-3xl w-full relative pt-40">
      <h1 className="text-4xl font-bold font-mono text-white mb-8">Contactez-moi : </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-white font-mono">Nom:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
        <label className="block">
          <span className="text-white font-mono">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
        <label className="block">
          <span className="text-white font-mono">Sujet:</span>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
        <label className="block">
          <span className="text-white font-mono">Message:</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
        <input
          type="submit"
          value="Envoyer"
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
      </form>
    </div>
  );
}
export default Contact;
