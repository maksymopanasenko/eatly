import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Navbar.module.scss";

type NavbarProps = {
  mobile?: boolean;
  isFooter?: boolean;
  column?: boolean;
};

function Navbar({ mobile, isFooter, column }: NavbarProps) {
  return (
    <ul className={cn(styles.Navbar, { [styles.NavbarMobile]: mobile }, { [styles.NavbarFooter]: isFooter }, { [styles.NavbarColumn]: column })}>
      {!isFooter &&
        (<li>
          <Link to="/menu">Menu</Link>
        </li>)
      }
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/pricing">Pricing</Link>
      </li>
      {isFooter &&
        (<li>
          <Link to="/about">About us</Link>
        </li>)
      }
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Navbar;
