import { connect, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import styles from '../Cards/Cards.module.css'
import { useState } from "react"

import Cards from "../Cards/Cards.jsx";



export  function Favourates({myFavourates}) {
    //const myFavourates = useSelector(state => state.myFavourates)
  //console.log(myFavourates[0]);
  return (
    <>
    <h2>Favourite characters</h2>
    <Cards characters={myFavourates} />
     
    </>
  );
}
export const mapStateToProps = (state) => {
    return {
      myFavourates: state.myFavourates
    }
  }
  
export default connect(mapStateToProps, null)(Favourates);

