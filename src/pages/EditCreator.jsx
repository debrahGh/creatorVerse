import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

function EditCreator() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from('creators').select().eq('id', id).single();
      setName(data.name);
      setUrl(data.url);
      setDescription(data.description);
    };
    fetchCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('creators').update({ name, url, description }).eq('id', id);
  };

  return (
    <div>
      <h2>Edit Creator</h2>
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
        <button type="submit">Update Creator</button>
      </form>
    </div>
  );
}

export default EditCreator;
