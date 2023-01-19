// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import NxWelcome from './nx-welcome';

export function App() {
  const [data, setData] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/', { mode: 'cors' });
      const text = await response.text();

      setData(text);
    };

    fetchData();
  }, []);

  return (
    <NxWelcome title="app" ready={!!data} />
  );
}

export default App;
