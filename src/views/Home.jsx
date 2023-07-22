import { useNavigate } from "react-router-dom";
import Cards from "../components/Cards/Cards.jsx";

//import characters, { Rick } from '../data.js';

const Home = ({ characters, onClose }) => {
  const navegacion = useNavigate();

  return (
    <>
      <h2>Rick and Morty Characters</h2>

      <Cards characters={characters} onClose={onClose} />

      <button
        onClick={() => {
          navegacion("/about");
        }}
      >
        Ingresar
      </button>
    </>
  );
};

export default Home;
