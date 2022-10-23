import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ActiveStatus, Arrow, Logo, UserProfile } from "../images/Images";
import styles from "../styles/navbar.module.scss";

export default function Navbar() {
  const [dropdownList, setdropdownList] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <div className={styles.navbar_wrapper} id="navbarWrapper">
      {/* {windowSize.width > 600 && } */}
      <div className={styles.navbar_content}>
        <div className={styles.logo}>{Logo()}</div>
        <div className={styles.links}>
          <Link href="">
            <a className={styles.menu_label}>Menu One</a>
          </Link>
          <Link href="">
            <a className={styles.menu_label}>Menu Two</a>
          </Link>
          <Link href="">
            <a className={styles.menu_label}>Menu Three</a>
          </Link>
          <Link href="">
            <a className={styles.menu_label}>Menu Four</a>
          </Link>
        </div>
        <div
          className={styles.user_dropdown}
          onClick={() => setdropdownList(!dropdownList)}
        >
          <p className={styles.profile}>
            {UserProfile()}
            <span className={styles.status}>{ActiveStatus()}</span>
          </p>

          <p className={styles.dropdown_label} id="user">
            User
          </p>
          <p
            className={
              dropdownList
                ? `${styles.dropdown_arrow} ${styles.rotate_arrow}`
                : styles.dropdown_arrow
            }
            id="dropdownArrow"
          >
            {Arrow()}
          </p>

          <div
            className={
              dropdownList
                ? `${styles.dropdown_list} ${styles.toggle_height}`
                : styles.dropdown_list
            }
            id="dropdownList"
          >
            <p className={styles.list_label}>User One</p>
            <p className={styles.list_label}>User Two</p>
          </div>
        </div>
      </div>
    </div>
  );
}
