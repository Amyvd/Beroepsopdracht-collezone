import FooterDataTerms from "../Data/Footer/FooterDataTerms";

import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import whatsapp from "../../img/whatsapp.png";
import snapchat from "../../img/snapchat.png";

import "./Footer.css";


const Footer = () => {
    let footertermscollezone = FooterDataTerms.map(terms => {
        const array = [];
        for (let i = 0; i < terms.termlink.length; i++) {
            array.push(
                <li className="terms">{terms.termlink[i]}</li>
            )
        }
        return array
    })



    return (
        <footer className="footer">
            <div className="footer__terms">
                <ul className="footer__list">
                    {footertermscollezone}
                </ul>
            </div>
            <div className="socialLinks">
                <ul className="socilalinks__list">
                    <li className="sociallinks__listitem"><a href="https://www.facebook.com/?ref=logo"><img src={facebook} alt="facebook__image" className="social_images"/></a></li>
                    <li className="sociallinks__listitem"><a href="https://www.facebook.com/?ref=logo"><img src={snapchat} alt="" className="social_images"/></a></li>
                    <li className="sociallinks__listitem"><a href="https://www.facebook.com/?ref=logo"><img src={instagram} alt=""className="social_images" /></a></li>
                    <li className="sociallinks__listitem"><a href="https://www.facebook.com/?ref=logo"><img src={whatsapp} alt="" className="social_images"/></a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;