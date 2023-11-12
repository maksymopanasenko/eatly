import { Box, IconButton, Typography } from "@mui/material";
import LogoIcon from "../../assets/icons/Logo.svg?react";

function Logo() {
    return (
        <Box>
            <IconButton>
                <LogoIcon />
            </IconButton>
            <Typography component='span'>
                eatly
            </Typography>
        </Box>
    );
}

export default Logo;