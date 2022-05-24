import React from 'react';
import { useState } from 'react';

function Form() {
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/form', {
      body: JSON.stringify({
        username,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const result = await response.json();
  };
  return (
    <form onSubmit={handleSubmit}>
      Username
      <input
        onChange={(e) => setUsername(e.target.value)}
        type='text'
        value={username}
      />
    </form>
  );
}

export default Form;
