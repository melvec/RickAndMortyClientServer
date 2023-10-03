import { connect, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import styles from '../Cards/Cards.module.css';
import stylesFav from './Favourates.module.css';
import { useState } from "react"

import Cards from "../Cards/Cards.jsx";
import {filterCards, orderCards} from "../../redux/actions"
import { useDispatch } from "react-redux"




export  function Favourates() {
    const myFavourates = useSelector(state => state.myFavourates)

  const dispatch  = useDispatch();
  const [aux, setAux] = useState(false);

const handleOrder = (e) => {
  dispatch(orderCards(e.target.value))
  setAux(!aux);
}

const handleFilter = (e) =>{
  dispatch(filterCards(e.target.value))
}

  return (
    <>
    <h2>Favourite characters</h2>
    <div>
      <select className = {stylesFav.select} onChange={handleOrder}>
        <option value="A">Ascending</option>
        <option value="D">Descending</option>
      </select>
      <select  className = {stylesFav.select} onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unkown">Unknown</option>
      </select>
    </div>
    <Cards characters={myFavourates} />
     
    </>
  );
}


export default Favourates;
// export const mapStateToProps = (state) => {
//     return {
//       myFavourates: state.myFavourates
//     }
//   }
  
// export default connect(mapStateToProps, null)(Favourates);

