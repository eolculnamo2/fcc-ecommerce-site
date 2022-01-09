import Link from "next/link";
import * as React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navbarTitle}>AutoCommerce</h1>

      <ul className={styles.navItems}>
        <li>
          <Link href="/" prefetch>
            Home
          </Link>
        </li>
        <li>About</li>
        <li>Shop</li>
        <li>
          <Link passHref href="/login" prefetch>
            Login
          </Link>
        </li>
      </ul>

      <ul className={styles.navIcons}>
        <i className="fas fa-search"></i>
        <i className="fas fa-shopping-cart"></i>
      </ul>
    </nav>
  );
};

export default Header;
