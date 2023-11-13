// import { Link } from "react-router-dom";
// import cn from "classnames";
// import styles from "./Navbar.module.scss";

import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

// type NavbarProps = {
//   mobile?: boolean;
//   isFooter?: boolean;
//   column?: boolean;
//   onClose?: (event: React.MouseEvent<HTMLElement>) => void;
// };

// function Navbar({ mobile, isFooter, column, onClose }: NavbarProps) {
//   return (
//     <ul className={cn(styles.Navbar, { [styles.NavbarMobile]: mobile }, { [styles.NavbarFooter]: isFooter }, { [styles.NavbarColumn]: column })}>
//       {!isFooter &&
//         (<li>
//           <Link to="/menu" onClick={onClose}>Menu</Link>
//         </li>)
//       }
//       <li>
//         <Link to="/blog" onClick={onClose}>Blog</Link>
//       </li>
//       <li>
//         <Link to="/pricing" onClick={onClose}>Pricing</Link>
//       </li>
//       {isFooter &&
//         (<li>
//           <Link to="/about">About us</Link>
//         </li>)
//       }
//       <li>
//         <Link to="/contact" onClick={onClose}>Contact</Link>
//       </li>
//     </ul>
//   );
// }

// export default Navbar;

type NavbarProps = {
  mobile?: boolean;
  isFooter?: boolean;
  onClose?: (event: React.MouseEvent<HTMLElement>) => void;
};


function Navbar({ mobile, isFooter, onClose }: NavbarProps) {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: mobile ? "column" : "row",
      }}>
      {!isFooter &&
        <ListItem
          sx={{ justifyContent: mobile && !isFooter ? "center" : "flex-start" }}
        >
          <Link to="/menu" onClick={onClose} >Menu</Link>
        </ListItem>
      }
      <ListItem
        sx={{ justifyContent: mobile && !isFooter ? "center" : "flex-start" }}
      >
        <Link to="/blog" onClick={onClose} >Blog</Link>
      </ListItem>
      <ListItem
        sx={{ justifyContent: mobile && !isFooter ? "center" : "flex-start" }}
      >
        <Link to="/pricing" onClick={onClose} >Pricing</Link>
      </ListItem>
      {isFooter &&
        (<ListItem
          sx={{ justifyContent: mobile && !isFooter ? "center" : "flex-start" }}
        >
          <Link to="/about">About us</Link>
        </ListItem>)
      }
      <ListItem
        sx={{ justifyContent: mobile && !isFooter ? "center" : "flex-start" }}
      >
        <Link to="/contact" onClick={onClose} >Contact</Link>
      </ListItem>
    </List>
  );
};

export default Navbar;