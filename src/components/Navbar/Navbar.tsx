
import cn from "classnames";
import styles from "./Navbar.module.scss";

import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

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
        bgcolor: mobile && !isFooter ? "primary.main" : "unset",
        justifyContent: "space-between",
        gap: !mobile ? 40 : 0,
        '@media (min-width: 768px)': {
          gap: !mobile ? 50 : 0,
        },
      }}>
      {!isFooter &&
        <ListItem
          sx={{ justifyContent: mobile && !isFooter ? "center" : "flex-start" }}
        >
          <ListItemText>
            <Link to="/menu" onClick={onClose} className={cn({ [styles.NavbarMobileLink]: mobile && !isFooter })}>Menu</Link>
          </ListItemText>
        </ListItem>
      }
      <ListItem
        sx={{ justifyContent: mobile && !isFooter ? "center" : "flex-start" }}
      >
        <ListItemText>
          <Link to="/blog" onClick={onClose} className={cn({ [styles.NavbarMobileLink]: mobile && !isFooter })}>Blog</Link>
        </ListItemText>
      </ListItem>
      <ListItem
        sx={{ justifyContent: mobile && !isFooter ? "center" : "flex-start" }}
      >
        <ListItemText>
          <Link to="/pricing" onClick={onClose} className={cn({ [styles.NavbarMobileLink]: mobile && !isFooter })}>Pricing</Link>
        </ListItemText>
      </ListItem>
      {isFooter &&
        (<ListItem
          sx={{ justifyContent: mobile && !isFooter ? "center" : "flex-start" }}
        >
          <ListItemText>
            <Link to="/about">About us</Link>
          </ListItemText>
        </ListItem>)
      }
      <ListItem
        sx={{ justifyContent: mobile && !isFooter ? "center" : "flex-start" }}
      >
        <ListItemText>
          <Link to="/contact" onClick={onClose} className={cn({ [styles.NavbarMobileLink]: mobile && !isFooter })} >Contact</Link>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default Navbar;