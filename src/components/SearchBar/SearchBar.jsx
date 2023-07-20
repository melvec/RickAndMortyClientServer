import styles from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [id, setID] = useState("");

  const handleChange = () => {
    setID(event.target.value);
    console.log(event.target.value);
  };
  const clearInput = () => {
    event.target.value.res
     console.log(event.target.value);
   };
  return (
    <div className={styles.SearchBar}>
      <input
            name="idCard" 
            type="search" 
            
            onChange={handleChange} 
            placeholder="Type a number"
      />
      <button onClick={()=>{
        console.log('id en el search '+id);
        
        onSearch(id);
        console.log('ejecutando setID');
        setID("")}}>Add</button>
    </div>
  );
}
