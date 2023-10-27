import Navbar from "../Navbar/Navbar";
import styles from "./MobileMenu.module.scss";

function MobileMenu() {
  return (
    <div className={styles.MobileMenu}>
      <Navbar mobile />
    </div>
  );
}

export default MobileMenu;
