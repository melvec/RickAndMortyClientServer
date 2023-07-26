import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png';

export default function Nav({ onSearch }) {
  return (
    <nav className={styles.navbar}>
       <div className={styles.logo}><img src={Logo} alt="" /> </div>
       
       <div className={styles.searchBar}><SearchBar onSearch={onSearch} /></div>
      <div className={styles.navbarlinks}>
        <ul>
         
        
          <li>
         
            <Link to="/">
            
              <span>Home </span>
            </Link>
          </li>
          <li>
         
            <Link to="/favourates">
            
              <span>Favourates </span>
            </Link>
          </li>
          <li>
            <Link to="/about">
          
              <span>About </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
