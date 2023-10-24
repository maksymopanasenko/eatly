import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <ul className={styles.Navbar}>
      <li>
        <Link to="/menu">Menu</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Navbar;
