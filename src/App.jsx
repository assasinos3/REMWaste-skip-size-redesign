import { useEffect, useState } from 'react';

function App() {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      .then((res) => res.json())
      .then((skips) => {
        setSkips(skips || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch skips:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? <p>Loading skips...</p> : <pre>{JSON.stringify(skips, null, 2)}</pre>}
    </div>
  );
}

export default App
