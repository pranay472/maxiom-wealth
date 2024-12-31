import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React TypeScript App</h1>
        <p>Backend Message: {message}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
