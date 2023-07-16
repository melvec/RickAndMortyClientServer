import './App.css'
import Cards from './components/Cards/Cards';
import { useState } from 'react';
import Nav from './components/Nav/Nav'

import characters from './data.js'

const example = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  origin: {
     name: 'Earth (C-137)',
     url: 'https://rickandmortyapi.com/api/location/1',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};



function App() {
// const [characters, setCharacters] = useState([]);

// const onSearch = () => {
//   setCharacters(example);
// }

//onSearch();

  return (
    <>
     <div className='App'>
         <Nav />
         <Cards characters={characters} /> 
         
      </div>
       
    </>
  )
}

export default App
