import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";

export default function Nav({onSearch}) {
  return (
    <nav className={styles.navContainer}>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
