import styles from "../styles/navbar.module.scss";
import Image from "next/image";
import Logo from "/public/isoclogo-colored.svg"
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
    ["Home", "/"],
    ["About Us", "", [
        ["The Committee", ""]
    ]],
    ["What's On", ""],
    ["Gallery", ""],
    ["Life", "", [
        ["Prayer Rooms", ""],
        ["Jumu'ah", ""],
        ["Halal Food", ""],
        ["Tarbiyaah", ""],
        ["Fresher's Handbook", ""],
        ["Study Secrets", ""],
        ["WhatsApp Chats", ""],
    ]],
    ["Campaigns", "", [
        ["Charity Week", ""],
        ["Discover Islam Week", ""],
        ["Fresher's Fortnight", ""],
    ]],
    ["Outreach & Wellbeing", "", [
        ["Community Drives", ""],
        ["Buddy Scheme", ""],
        ["BADG", ""],
    ]],
    ["Support Us", "", [
        ["Shop", ""],
        ["Donate", ""],
    ]],
    ["Contact", ""]
];


function NavListItem({ arrItems = [], dropdownItems = [] }) {
    const router = useRouter();
    const [dropdownActive, setDropdownActive] = useState(false);

    const toggleDropdown = () => {
        setDropdownActive(!dropdownActive);
    };

    return (
        <li className={router.pathname === arrItems[1] ? styles.active : ""}>
            <div className={styles.navLink}>
                <Link href={arrItems[1]} onClick={toggleDropdown}>
                    {arrItems[0]}
                </Link>
                {dropdownItems.length > 0 && (
                    <button
                        className={`${styles.dropdownArrow} ${dropdownActive ? styles.dropdownArrowActive : ""}`}
                        onClick={toggleDropdown}
                    >
                    <img src="/arrowPointer.svg"></img>
                    </button>
                )}
            </div>
            {dropdownActive && dropdownItems.length > 0 && (
                <ul className={styles.dropdown}>
                    {dropdownItems.map((item) => (
                        <li key={item[0]}>
                            <Link href={item[1]}>{item[0]}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}

export default function Navbar() {
    const [navActive, setNavActive] = useState(false);

    // Function to handle scrolling behavior
    const handleScroll = () => {
        const body = document.body;
        const html = document.documentElement;
        if (navActive) {
            window.scrollTo(0, 0);
            body.style.overflow = "hidden";
            html.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
            html.style.overflow = "auto";

        }
    };

    // Add an event listener to handle scrolling when `navActive` changes
    useEffect(() => {
        handleScroll();
    }, [navActive]);

    return (
        <nav className={styles.nav}>
            <div className={styles.navTop}>
                <Link href="/" className={styles.siteName}>
                    <Image
                        className={styles.logoImg}
                        src={Logo}
                        width={78}
                        height={78}
                        alt="logo"
                    />
                </Link>

                <div onClick={() => setNavActive(!navActive)} className={`${styles.nav_menu_bar} ${navActive ? styles.nav_menu_bar_active : ""}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <ul className={`${styles.nav_menu_list} ${navActive ? styles.nav_menu_list_active : ""}`}>
                {links.map((link) => (
                    <NavListItem
                        key={link[0]}
                        arrItems={link.slice(0, 2)}
                        dropdownItems={link[2] || []}
                    />
                ))}
            </ul>
        </nav>
    );
}
