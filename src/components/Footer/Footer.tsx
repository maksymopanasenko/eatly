
import { Link } from "react-router-dom";

import { Box, Container, Divider, Typography, useMediaQuery } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import SocialMedia from "../SocialMedia/SocialMedia";
import Logo from "../Logo/Logo";

function Footer() {
    const isMobile = useMediaQuery('(max-width: 575px)');

    return (
        <Box component="footer" py={isMobile ? 40 : 90} bgcolor="customGray.light">
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="space-between" pb={isMobile ? 32 : 20}>
                    <Box display="flex"
                        justifyContent="space-between"
                        width="100%"
                        flexDirection={isMobile ? "column" : "row"}
                    >
                        <Link to="/" className='Logo'>
                            <Logo />
                        </Link>
                        <Navbar mobile={isMobile} isFooter />
                    </Box>
                    {isMobile && <SocialMedia />}
                </Box>
                <Divider color="#818181" />
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={isMobile ? "center" : "space-between"}
                    mt={40}
                >
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