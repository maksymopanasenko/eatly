
import { Link } from "react-router-dom";

import { Box, Container, Divider, Typography, useMediaQuery } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import SocialMedia from "../SocialMedia/SocialMedia";

import Logo from "../../assets/icons/Logo.svg?react";

import styles from './Footer.module.scss';

function Footer() {
    const isMobile = useMediaQuery('(max-width: 575px)');

    return (
        <Box component="footer" py={90} bgcolor="customGray.light">
            <Container maxWidth="lg">
                <Box className={styles.FooterBody}>
                    <div className={styles.FooterNavigation}>
                        <Link to="/" className='Logo'>
                            <Logo />
                            <span>eatly</span>
                        </Link>
                        <Navbar mobile={isMobile} isFooter/>
                    </div>
                    {isMobile && <SocialMedia />}
                </Box>
                <Divider color="#818181" />
                <Box display="flex" alignItems="center" justifyContent="space-between" mt={40}>
                    <Typography color="customGray.dark">
                        © 2023 EATLY All Rights Reserved.
                    </Typography>
                    {!isMobile && <SocialMedia />}
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;