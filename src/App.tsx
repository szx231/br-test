import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { getData } from './store/getData/thunk';
import { useAppDispatch } from './hooks';

function App() {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return <></>;
}

export default App;
