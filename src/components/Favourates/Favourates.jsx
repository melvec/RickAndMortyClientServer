import { connect, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import { useState } from "react"


export  function Favourates({myFavourates}) {
    //const myFavourates = useSelector(state => state.myFavourates)
  console.log(myFavourates);
  return (
    <>
    Favs page under construction
      {myFavourates.map((fav) => {
        <Card
          id={fav.id}
          key={fav.id}
          name={fav.name}
          species={fav.species}
          status={fav.status}
          origin={fav.origin}
          gender={fav.gender}
          image={fav.image}
        />;
      })}
    </>
  );
}
export const mapStateToProps = (state) => {
    return {
      myFavourates: state.myFavourates
    }
  }
  
  export default connect(mapStateToProps, null)(Favourates);

