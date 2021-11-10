import { useState } from 'react';
import NavigationBar from './components/Navbar';

function App() {
  const [pokename, changePokename] = useState()
  return (
    <>
      <NavigationBar pokemonState={pokename} statePoke={changePokename} />
      <h1>{pokename}</h1>
    </>
  );
}

export default App;
