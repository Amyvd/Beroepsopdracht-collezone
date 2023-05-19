import "./LoginSocialButtons.css";

/*import images*/
import appleLogo from "../../../img/Login/apple-logo.png";
import facebookLogoLogin from "../../../img/Login/facebook-app-symbol.png";
import SpotifyLogoLogin from "../../../img/Login/spotify.png";
import googlelogo from "../../../img/Login/google.png";

const InlogSocialbuttons = () => {
    return(
        <section className="loginbutton__socials">
                <button className="button__social applelogo__button">
                    <figure className="button__figure figure__apple"><img src={appleLogo} alt="" className=" button__figure__Image" /></figure>
                </button>
                <button className="button__social facebooklogo__button">
                    <figure className="button__figure"><img src={facebookLogoLogin} alt="" className=" button__figure__Image" /></figure>
                </button>
                <button className="button__social spotifylog__button">
                    <figure className="button__figure"><img src={SpotifyLogoLogin} alt="" className=" button__figure__Image" /></figure>
                </button>
                <button className="button__social googlelogo__button">
                    <figure className="button__figure"><img src={googlelogo} alt="" className=" button__figure__Image" /></figure>
                </button>
            </section>
    )
}

export default InlogSocialbuttons;