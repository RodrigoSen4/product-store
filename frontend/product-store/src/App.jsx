import { useEffect, useState } from 'react';
import './App.css';
import { getAll } from './helpers/requestsAPI';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <p>Hello Word</p>
  );
}

export default App;
