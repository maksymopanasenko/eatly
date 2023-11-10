import { BiLogoInstagram } from 'react-icons/bi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import styles from './SocialMedia.module.scss';

function SocialMedia() {
    return (
        <ul className={styles.SocialMedia}>
            <li>
                <a href="#"><BiLogoInstagram color="#081420"/></a>
            </li>
            <li>
                <a href="#"><BiLogoLinkedin color="#081420"/></a>
            </li>
            <li>
                <a href="#"><BiLogoFacebook color="#081420"/></a>
            </li>
            <li>
                <a href="#"><BiLogoTwitter color="#081420"/></a>
            </li>
        </ul>
    );
}

export default SocialMedia;