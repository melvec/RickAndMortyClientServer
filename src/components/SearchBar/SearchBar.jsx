import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setID] = useState("");

  const handleChange = () => {
    setID(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className={styles.SearchBar}>
      <input type="search" 
            value={id} 
            onChange={handleChange} 
      />
      <button onClick={()=>onSearch(id)}>Agregar</button>
    </div>
  );
}
