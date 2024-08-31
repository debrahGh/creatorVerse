import { useState } from 'react';
import { supabase } from '../client';

function AddCreator() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('creators').insert([{ name, url, description }]);
    setName('');
    setUrl('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add a New Creator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
}

export default AddCreator;
