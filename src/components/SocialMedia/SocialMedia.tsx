import Instagram from "./icons/instagram.svg?react";
import Linkedin from "./icons/linkedin.svg?react";
import Facebook from "./icons/facebook.svg?react";
import Twitter from "./icons/twitter.svg?react";

import styles from './SocialMedia.module.scss';

function SocialMedia() {
    return (
        <ul className={styles.SocialMedia}>
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
    );
}

export default SocialMedia;