import styles from "./Card.module.css";
import {Link} from 'react-router-dom'

export default function Card(props) {

  

  return (
    <>
      <div className={styles.card}>
      <button onClick={() => {
       
       props.onClose(props.id)}}>X</button>
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
