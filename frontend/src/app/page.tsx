"use client";

import { useEffect, useState } from 'react';

interface APIData {
  Hello: string;
}

export default function Home() {
  const [data, setData] = useState<APIData | null>(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.Hello}</h1>
    </div>
  );
}
