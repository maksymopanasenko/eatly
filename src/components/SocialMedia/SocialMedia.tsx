import { BiLogoInstagram, BiLogoLinkedin, BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi';
import { List, ListItem, Link } from '@mui/material';
import styles from './SocialMedia.module.scss';

function SocialMedia() {
    return (
        <List
            sx={{
                display: "flex",
                gap: 10,
                '@media (min-width: 768px)': {
                    gap: 34,
                  },
            }}
        >
            <ListItem>
                <Link href="#">
                    <BiLogoInstagram
                        color="#081420"
                        className={styles.SocialMedia} />
                </Link>
            </ListItem>
            <ListItem>
                <Link href="#">
                    <BiLogoLinkedin
                        color="#081420"
                        className={styles.SocialMedia} />
                </Link>
            </ListItem>
            <ListItem>
                <Link href="#">
                    <BiLogoFacebook
                        color="#081420"
                        className={styles.SocialMedia} />
                </Link>
            </ListItem>
            <ListItem>
                <Link href="#">
                    <BiLogoTwitter
                        color="#081420"
                        className={styles.SocialMedia} />
                </Link>
            </ListItem>
        </List>
    );
}

export default SocialMedia;