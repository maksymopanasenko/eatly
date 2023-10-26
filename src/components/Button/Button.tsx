import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  style: React.CSSProperties;
};

function Button({ children, style }: ButtonProps) {
  return (
    <button type="button" className={styles.Button} style={style}>
      {children}
    </button>
  );
}

export default Button;
