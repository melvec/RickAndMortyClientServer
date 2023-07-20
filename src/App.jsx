import './App.css'
import Cards from './components/Cards/Cards';
import { useState } from "react";
import Nav from './components/Nav/Nav'
import axios from 'axios'

//import characters from './data.js'

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
 const [characters, setCharacters] = useState([]);


const onSearch = (id) => {
  console.log('receiving id', id );
  axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
    if (data.name) {
       setCharacters((oldChars) => [...oldChars, data]);
    } else {
       window.alert('¡No hay personajes con este ID!');
    }
 });
}
 
const  onClose =(id)=> {
  console.log("ejecutando on close "+ id);
 const newChar = characters.filter((character)=> character.id !== Number(id));
  setCharacters(newChar);
}



  return (
    <>
     <div className='App'>
          <Nav onSearch= {onSearch}/> 
         <Cards characters={characters} onClose={onClose} /> 
         
      </div>
       
    </>
  )
}

export default App
