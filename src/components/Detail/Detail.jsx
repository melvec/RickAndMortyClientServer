import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
//import { getCharacters } from '../redux/actions';

const Detail = () =>{
    const [character, setCharacters] = useState([]);

    const {id} = useParams();
  
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacters(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacters({});
     }, [id]);


    return (
        <>
        <h2>
            esta es la ficha de usuario de ID {id }
        </h2>
         <h2>Name  {character.name }</h2>

        <h2  >{character.name}</h2>
         <h2>{character.id}</h2>
         <h2>{character.status}</h2>
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2> 
        
        

    </>
    )
};

export default Detail;


