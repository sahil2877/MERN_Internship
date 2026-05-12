import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {

  const [stamina, setStamina] = useState(100);

  const [clickCount, setClickCount] = useState(0);

  function handleCodeClick() {

    const nextClick = clickCount + 1;

    setClickCount(nextClick);

    let newStamina;

    if (nextClick % 5 === 0) {

      newStamina = stamina - 15;

    } else {

      newStamina = stamina - 2;

    }

    if (newStamina < 0) {
      newStamina = 0;
    }

    setStamina(newStamina);
  }

  return (
    <div className="sb-container">

      <h1>Developer Stamina Burner</h1>

      <h2>Stamina: {stamina}</h2>

      <button className='sb-btn'
        onClick={handleCodeClick}
        disabled={stamina <= 0}
      >

        {
          stamina <= 0
          ?
          "Burnout! Rest Required"
          :
          "Write Code"
        }

      </button>

    </div>
  );
}

export default App;
