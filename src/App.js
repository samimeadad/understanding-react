import { useEffect, useState } from 'react';
import './App.css';
import Device from './components/Device/Device';

function App () {
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
    </div>
  );
}

export default App;
