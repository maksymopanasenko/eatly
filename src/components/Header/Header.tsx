import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";
import Logo from "./icons/Logo.svg?react";
import Container from "../Container/Container";

function Header() {
  return (
    <header className={styles.Header}>
      <Container>
        <div className={styles.HeaderBody}>
          <div className={styles.HeaderNavigation}>
            <Link to="/" className={styles.HeaderLogo}>
              <Logo />
              <span>eatly</span>
            </Link>
            <Navbar />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
