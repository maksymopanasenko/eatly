import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Navbar.module.scss";

type NavbarProps = {
  mobile?: boolean;
};

function Navbar({ mobile }: NavbarProps) {
  return (
    <ul className={cn(styles.Navbar, { [styles.NavbarMobile]: mobile })}>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/pricing">Pricing</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Navbar;
