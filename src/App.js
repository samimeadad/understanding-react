import { useEffect, useState } from 'react';
import './App.css';
import Books from './components/Books/Books';
import Device from './components/Device/Device';

function App () {
  const books = [
    { name: 'Shoe Dog', author: 'Wright' },
    { name: 'Build to Sell', author: 'John' },
    { name: 'Crack the coding interview', author: 'Elice' },
    { name: 'Javascript', author: 'Michael' }
  ]

  const [ steps, setSteps ] = useState( 0 );

  const handleStepsCounter = () => {
    setSteps( steps + 1 );
  }

  useEffect( () => {
    console.log( steps );
  }, [ steps ] );

  return (
    <div className="App">
      <h2>My Steps: { steps }</h2>
      <button onClick={ handleStepsCounter }>Walk</button>
      <Device name="Apple MacBook Pro" price="120000"></Device>
      <Books books={ books }></Books>
    </div>
  );
}

export default App;
