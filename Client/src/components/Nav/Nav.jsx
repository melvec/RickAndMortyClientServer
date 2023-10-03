import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png';
import { useState } from "react";
import {useRef} from "react";

export default function Nav({ onSearch }) {
  const [isToggled, setIsToggled] = useState(false);

  const navRef = useRef();
  const handleClick = () => {
    // Toggle the state value when the link is clicked
    navRef.current.classList.toggle("active")
  };

  return (
    <nav className={styles.navbar}>
       <div className={styles.logo}><img src={Logo} alt="" /> </div>
      
      

       
       <div className={styles.searchBar}><SearchBar onSearch={onSearch} /></div>
      
       {/* <a ref={navRef} onClick={handleClick} href="#" className={styles.toogleButton}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
       </a> */}
      <div className={styles.navbarlinks}>
        <ul>
         
        
          <li>
          
            <Link to="/">
            <a href="#">Home </a>
             
            </Link>
          </li>
          <li>
         
            <Link to="/favourates">
            
              <a href="#">Favourites </a>
            </Link>
          </li>
          <li>
            <Link to="/about">
          
              <a href="#">About </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
