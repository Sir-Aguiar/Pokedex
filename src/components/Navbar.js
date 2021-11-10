import { useState } from 'react';
import styles from './Navbar.module.css'

export default function NavigationBar({ pokemonState, statePoke }) {
  const [pokemonname, changePokemon] = useState()

  function shinePokeball() {
    document.getElementById("pokeimage").style.backgroundColor = "rgba(210, 77, 67)";
    setTimeout(() => {
      document.getElementById("pokeimage").style.backgroundColor = "unset";
    }, 1000)
  }

  return (
    <div className={styles.navbar} >

      <img src='https://www.freeiconspng.com/uploads/pokeball-icon-15.png' id='pokeimage' alt='alternativeimage' />

      <input type='text' placeholder='Pokemon name' onChange={(e) => changePokemon(e.target.value)}
        onKeyDown={
          (e) => {
            if (e.key === 'Enter') {
              statePoke(pokemonname);
              shinePokeball()
            }
          }
        } />

      <button
        onClick={
          () => {
            shinePokeball();
            statePoke(pokemonname)
          }
        }
      >
        Search
      </button>

    </div >
  )
}