import * as React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <ul className={styles.Footer}>
        <li>Admin</li>
        <li>Contact Us</li>
      </ul>
    </footer>
  )
}

export default Footer;
