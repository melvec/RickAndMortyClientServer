import "./App.css";
import Home from './views/Home.jsx'
import About from './views/About.jsx'
import Detail from './components/Detail/Detail'
import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav/Nav";
import axios from 'axios';
import { useState } from "react";

//import characters from './data.js'



function App() {
  
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    console.log("receiving id", id);
    //checking if the ID is already listed
    const characterExist = characters.filter(
      (character) => character.id == Number(id)
    );

    if (characterExist.length > 0) {
      window.alert("There is already a character with that ID!");
    } else {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [data, ...oldChars]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    }
  };
  const onClose = (id) => {
    console.log("ejecutando on close " + id);
    const newChar = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(newChar);
  };

  return (
    <>
      <div className="App">
      <Nav onSearch={onSearch} />
        <Routes>
          <Route path='/' element={<Home characters={characters} onClose={onClose}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
