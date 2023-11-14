
import cn from "classnames";
import styles from "./Navbar.module.scss";

import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

type NavbarProps = {
  isMobile?: boolean;
   isLocatedInFooter ?: boolean;
  onClose?: (event: React.MouseEvent<HTMLElement>) => void;
};


function Navbar({ isMobile,  isLocatedInFooter , onClose }: NavbarProps) {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        bgcolor: isMobile && ! isLocatedInFooter  ? "primary.main" : "unset",
        justifyContent: "space-between",
        gap: !isMobile ? 40 : 0,
        '@media (min-width: 768px)': {
          gap: !isMobile ? 50 : 0,
        },
      }}>
      {! isLocatedInFooter  &&
        <ListItem
          sx={{ justifyContent: isMobile && ! isLocatedInFooter  ? "center" : "flex-start" }}
        >
          <ListItemText>
            <Link to="/menu" onClick={onClose} className={cn({ [styles.NavbarMobileLink]: isMobile && ! isLocatedInFooter  })}>Menu</Link>
          </ListItemText>
        </ListItem>
      }
      <ListItem
        sx={{ justifyContent: isMobile && ! isLocatedInFooter  ? "center" : "flex-start" }}
      >
        <ListItemText>
          <Link to="/blog" onClick={onClose} className={cn({ [styles.NavbarMobileLink]: isMobile && ! isLocatedInFooter  })}>Blog</Link>
        </ListItemText>
      </ListItem>
      <ListItem
        sx={{ justifyContent: isMobile && ! isLocatedInFooter  ? "center" : "flex-start" }}
      >
        <ListItemText>
          <Link to="/pricing" onClick={onClose} className={cn({ [styles.NavbarMobileLink]: isMobile && ! isLocatedInFooter  })}>Pricing</Link>
        </ListItemText>
      </ListItem>
      { isLocatedInFooter  &&
        (<ListItem
          sx={{ justifyContent: isMobile && ! isLocatedInFooter  ? "center" : "flex-start" }}
        >
          <ListItemText>
            <Link to="/about">About us</Link>
          </ListItemText>
        </ListItem>)
      }
      <ListItem
        sx={{ justifyContent: isMobile && ! isLocatedInFooter  ? "center" : "flex-start" }}
      >
        <ListItemText>
          <Link to="/contact" onClick={onClose} className={cn({ [styles.NavbarMobileLink]: isMobile && ! isLocatedInFooter  })} >Contact</Link>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default Navbar;