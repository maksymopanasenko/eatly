import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Navbar.module.scss";

type NavbarProps = {
  mobile?: boolean;
  isFooter?: boolean;
  column?: boolean;
  onClose?: (event: React.MouseEvent<HTMLElement>) => void;
};

function Navbar({ mobile, isFooter, column, onClose }: NavbarProps) {
  return (
    <ul className={cn(styles.Navbar, { [styles.NavbarMobile]: mobile }, { [styles.NavbarFooter]: isFooter }, { [styles.NavbarColumn]: column })}>
      {!isFooter &&
        (<li>
          <Link to="/menu" onClick={onClose}>Menu</Link>
        </li>)
      }
      <li>
        <Link to="/blog" onClick={onClose}>Blog</Link>
      </li>
      <li>
        <Link to="/pricing" onClick={onClose}>Pricing</Link>
      </li>
      {isFooter &&
        (<li>
          <Link to="/about">About us</Link>
        </li>)
      }
      <li>
        <Link to="/contact" onClick={onClose}>Contact</Link>
      </li>
    </ul>
  );
}

export default Navbar;
