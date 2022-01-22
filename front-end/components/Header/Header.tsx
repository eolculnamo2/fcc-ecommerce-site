import Link from "next/link";
import * as React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navbarTitle}>AutoCommerce</h1>

      <ul className={styles.navItems}>
        <li>
          <Link href="/" prefetch>
            Shop
          </Link>
        </li>
        <li>
          <Link href="/parts">
            Other Parts
          </Link>
        </li>
        <li>Cart</li>
        <li>
          <Link passHref href="/login" prefetch>
            Login
          </Link>
        </li>
      </ul>

      <ul className={styles.navIcons}>
        <FontAwesomeIcon icon={faSearch} className={styles.navIcon} />
        <FontAwesomeIcon icon={faShoppingCart} className={styles.navIcon} />
      </ul>
    </nav>
  );
};

export default Header;
