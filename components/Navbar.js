import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ActiveStatus, Arrow, Logo, UserProfile } from "../images/Images";
import styles from "../styles/navbar.module.scss";
import menu from "../assets/menu.png";
import cross from "../assets/cross.png";
import useClickOutside from "../helper/useClickOutside";

export default function Navbar() {
  const [hamMenu, sethamMenu] = useState(false);
  const ref = useRef();

  const close = useCallback(() => {
    sethamMenu(false);
    setdropdownList(false);
    windowSize.width <= 600 && hamMenu && toggleMenu();
  }, [hamMenu]);

  useClickOutside(ref, close);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const [dropdownList, setdropdownList] = useState(false);
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const toggleMenu = () => {
    setdropdownList(false);
    sethamMenu(!hamMenu);

    if (!hamMenu) {
      document.getElementById("hamMenu").classList.remove("fadeOutLeft");
      document.getElementById("hamMenu").style.opacity = "1";
      document.getElementById("mobSearch").style.zIndex = "1";
      document.getElementById("hamMenu").classList.add("fadeInLeft");
      document.getElementById("hamMenu").style.pointerEvents = "auto";
      document.getElementById("menu").style.marginLeft = "54vw";
      document.getElementById("menu").style.filter = "invert(1)";
    } else {
      document.getElementById("hamMenu").classList.remove("fadeInLeft");
      document.getElementById("hamMenu").style.opacity = "0";
      document.getElementById("mobSearch").style.zIndex = "6";
      document.getElementById("mobSearch").style.transition = "1s";
      document.getElementById("hamMenu").style.pointerEvents = "none";
      document.getElementById("hamMenu").classList.add("fadeOutLeft");
      document.getElementById("menu").style.marginLeft = "0";
      document.getElementById("menu").style.filter = "invert(0)";
    }
  };

  return (
    <div className={styles.navbar_wrapper} id="navbarWrapper" ref={ref}>
      {windowSize.width <= 600 ? (
        <div className={styles.menu_wrapper}>
          <dev className={styles.menu} onClick={toggleMenu} id="menu">
            {!hamMenu ? (
              <Image src={menu} width={26} height={26} alt="menu" />
            ) : (
              <Image src={cross} width={26} height={26} alt="cross" />
            )}
          </dev>
          <div className={styles.logo}>{Logo()}</div>

          <div className={styles.hamMenu} id="hamMenu">
            <div className={styles.navbar_content_wrapper}>
              <NavbarContent
                sethamMenu={sethamMenu}
                setdropdownList={setdropdownList}
                dropdownList={dropdownList}
                toggleMenu={toggleMenu}
                windowSize={windowSize}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.navbar_content_wrapper}>
          <div className={styles.logo}>{Logo()}</div>
          <NavbarContent
            setdropdownList={setdropdownList}
            dropdownList={dropdownList}
            windowSize={windowSize}
          />
        </div>
      )}
    </div>
  );
}

export const NavbarContent = ({
  dropdownList,
  setdropdownList,
  sethamMenu,
  toggleMenu,
  windowSize,
}) => {
  return (
    <div className={styles.navbar_content}>
      <div
        className={styles.links}
        onClick={() => {
          if (windowSize.width <= 600) {
            sethamMenu(false);
            toggleMenu();
          }
        }}
      >
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
        onClick={(e) => {
          setdropdownList(!dropdownList);
          e.stopPropagation();
        }}
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
  );
};
