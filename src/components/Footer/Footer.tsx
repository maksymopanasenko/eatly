
import { Link } from "react-router-dom";

import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";

import Logo from "../../assets/icons/Logo.svg?react";
import Instagram from "./icons/instagram.svg?react";
import Linkedin from "./icons/linkedin.svg?react";
import Facebook from "./icons/facebook.svg?react";
import Twitter from "./icons/twitter.svg?react";

import styles from './Footer.module.scss';

function Footer() {
    return (
        <footer className={styles.Footer}>
            <Container>
                <div className={styles.FooterNavigation}>
                    <Link to="/" className='Logo'>
                        <Logo />
                        <span>eatly</span>
                    </Link>
                    <Navbar isFooter/>
                </div>
                <div className={styles.FooterUnderNav}>
                    <p className={styles.FooterCopyright}>© 2023 EATLY All Rights Reserved.</p>
                    <ul className={styles.FooterSocial}>
                        <li>
                            <a href="#"><Instagram /></a>
                        </li>
                        <li>
                            <a href="#"><Linkedin /></a>
                        </li>
                        <li>
                            <a href="#"><Facebook /></a>
                        </li>
                        <li>
                            <a href="#"><Twitter /></a>
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;