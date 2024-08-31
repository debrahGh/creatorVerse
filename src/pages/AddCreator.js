import React, { useState } from 'react';
import { supabase } from '../client';

const AddCreator = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const addCreator = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('creators')
      .insert([{ name, url, description, imageURL }]);

    if (error) {
      console.error(error);
    } else {
      alert('Creator added!');
    }
  };

  return (
    <form onSubmit={addCreator}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <input
        type="url"
        placeholder="Image URL (optional)"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      <button type="submit">Add Creator</button>
    </form>
  );
};

export default AddCreator;
