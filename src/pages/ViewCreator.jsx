import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from('creators').select().eq('id', id).single();
      setCreator(data);
    };
    fetchCreator();
  }, [id]);

  return (
    <div>
      {creator ? (
        <>
          <h2>{creator.name}</h2>
          <p>{creator.description}</p>
          <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Channel</a>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ViewCreator;
