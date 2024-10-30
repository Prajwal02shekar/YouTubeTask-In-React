import React from 'react';
import Style from './Header.module.css';
import logo from '../assets/image.png';
import { FaSearch } from 'react-icons/fa';

function Header() {
    return (
        <header className={Style.header}>
            <div className={Style.headerLogo}>
                <img
                    src={logo}
                    alt="Logo"
                    className={Style.headerLogoImg}
                />
            </div>
            <div className={Style.headerSearch}>
                <input
                    type="text"
                    className={Style.searchInput}
                    placeholder="Search"
                />
                <button className={Style.searchButton}>
                    <FaSearch />
                </button>
            </div>
            <nav className={Style.headerNav}>
                <ul className={Style.headerNavList}>
                    <li className={Style.headerNavItem}>Home</li>
                    <li className={Style.headerNavItem}>Trending</li>
                    <li className={Style.headerNavItem}>Subscriptions</li>
                    <li className={Style.headerNavItem}>Library</li>
                </ul>
            </nav>
            <div className={Style.headerActions}>
                <button className={Style.headerButton}>Sign In</button>
            </div>
        </header>
    );
}

export default Header;
