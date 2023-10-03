import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'

export function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const { pathname } = useLocation();

  
  useEffect(() => {
    props.allCharacters.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [props.allCharacters]);

  const handleFavourate = () => {
    if (isFav) {
      
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      //console.log(props);
      setIsFav(true);
      props.addFav({id: props.id ,name: props.name,status: props.status,species: props.species,origin: props.origin, gender: props.gender, image: props.image });
    }
  };

  return (
    <>
      <div className={styles.card}>
   

      <div className={styles.fav}>
        {isFav ? (
          <button onClick={handleFavourate}>
            ❤️
          </button>
        ) : (
          <button onClick={handleFavourate}>🤍</button>
        )}

    </div>
<div>

<div className={styles.closeButton}>

        { pathname === '/home' && <button
          onClick={() => {
            props.onClose(props.id);
          }}
        >
          X
        </button>}
</div>
</div>
        <Link to={`/detail/${props.id}`}>
          <div>
            <img src={props.image} alt="" />
            <h1>{props.name}</h1>
          </div>

          <div>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.origin}</h2>
          </div>
        </Link>
      </div>
    </>
  );
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

//Una vez hecho esto, nos tenemos que asegurar que el status de nuestro estado local se mantenga aunque nos vayamos y volvamos al compon
export function mapStateToProps(state) {
  return {
    allCharacters: state.allCharacters
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
