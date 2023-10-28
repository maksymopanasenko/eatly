import cn from "classnames";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./MobileMenu.module.scss";

type MobileMenuProps = {
  onClose: () => void;
};

function MobileMenu({ onClose }: MobileMenuProps) {
  const [slide, setSlide] = useState(false);

  const handleClose = (
    event:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    const { target } = event;
    if (
      !(target as HTMLElement).closest(`.${styles.DropdownClose}`) &&
      (target as HTMLElement).nodeName !== "A"
    )
      return;

    setSlide(!slide);

    setTimeout(onClose, 700);
  };

  useEffect(() => {
    const slideCurtine = () => setSlide(!slide);

    setTimeout(slideCurtine, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn(styles.MobileMenu, { [styles.MobileMenuVilible]: slide })}
      onClick={handleClose}
      onKeyUp={handleClose}
      role="button"
      tabIndex={0}
    >
      <Navbar mobile />
    </div>
  );
}

export default MobileMenu;
