import { useEffect, useState } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

function Home() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from('creators').select();
      setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <div>
      <h1>CreatorVerse</h1>
      {creators.length > 0 ? (
        creators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))
      ) : (
        <p>No creators found.</p>
      )}
    </div>
  );
}

export default Home;
