
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";

import Logo from "../../assets/icons/Logo.svg?react";

import styles from './Footer.module.scss';
import SocialMedia from "../SocialMedia/SocialMedia";

import { Divider } from "@mui/material";

const MOBILE_BREAKPOINT = 575;

function Footer() {
    const [mobileView, setMobileView] = useState(window.innerWidth);

    useEffect(() => {
        setMobileView(window.innerWidth);

        const handleResize = () => {
            setMobileView(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <footer className={styles.Footer}>
            <Container>
                <div className={styles.FooterBody}>
                    <div className={styles.FooterNavigation}>
                        <Link to="/" className='Logo'>
                            <Logo />
                            <span>eatly</span>
                        </Link>
                        <Navbar isFooter column={mobileView < MOBILE_BREAKPOINT} />
                    </div>                    
                    {mobileView < MOBILE_BREAKPOINT && <SocialMedia />}
                </div>
                <Divider color="#818181" />
                <div className={styles.FooterUnderNav}>
                    <p className={styles.FooterCopyright}>© 2023 EATLY All Rights Reserved.</p>
                    {mobileView >= MOBILE_BREAKPOINT && <SocialMedia />}
                </div>
            </Container>
        </footer>
    );
}

export default Footer;