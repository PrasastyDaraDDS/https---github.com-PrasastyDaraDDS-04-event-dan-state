import { useState } from 'react';

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' },
];

export function ContactList({ selectedContact, contacts, onSelect }) {
  return (
    <section className="contact-list">
      <ul className="w-full">
        {contacts.map((contact) => (
          <li key={contact.email}>
            <button
              className="text-xs bg-blue-400 rounded p-1 m-2 text-white"
              onClick={() => onSelect(contact)}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Chat({ contact }) {
  const [text, setText] = useState('');

  return (
    <section className="chat m-2">
      <textarea
        rows={5}
        value={text}
        placeholder={`Mengobrol dengan + ${contact.name}`}
        onChange={(e) => setText(e.target.value)}
      />
    </section>
  );
}

// src/components/chat.tsx

export function ContactList({ contacts, selectedContact, onSelect }) {
    return (
      <section className="contact-list">
        <ul className="w-full">
          {contacts.map((contact) => (
            <li key={contact.email}>
              <button
                className="text-xs bg-blue-400 rounded p-1 m-2 text-white"
                onClick={() => onSelect(contact)}
              >
                {contact.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export function Chat({ contact }) {
    const [text, setText] = useState('');
  
    return (
      <section className="chat m-2">
        <textarea
          rows={5}
          value={text}
          placeholder={`Mengobrol dengan + ${contact.name}`}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="text-xs bg-gray-400 rounded px-2 py-1 m-2 text-blue-800"
          disabled={!text}
        >
          Kirim ke {contact.email}
        </button>
      </section>
    );
  }
  
  export default function Messenger() {
    const [to, setTo] = useState(contacts[0]);
  
    return (
      <div>
        <table className="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3">
                List Kontak
              </th>
              <th scope="col" className="px-6 py-3">
                Pesan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ContactList contacts={contacts} selectedContact={to} onSelect={setTo} />
              </td>
              <td>
                <Chat key={to.email} contact={to} /> />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }