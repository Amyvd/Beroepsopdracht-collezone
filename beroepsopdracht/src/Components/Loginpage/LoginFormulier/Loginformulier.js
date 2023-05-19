/*import de link functie van react router*/
import { Link } from "react-router-dom";

/*import components*/
import InlogSocialbuttons from "../LoginSocailButtons/LoginSocialButtons";

/*import css files*/
import "./Loginformulier.css";



const Loginformulier = () => {
    return (
        <div className="loginwrapper">
            <header>
                <h3 className="login__Title">Log in </h3>
                <p className=" heading headingtext">New to collezone? <Link className=" heading headingLink">Sign up for Free</Link></p>
            </header>
            <form action="" className="login__form">
                <div className="name formRegel">
                    <label htmlFor="" className="label name__label">Name</label>
                    <input type="text" className=" input name__input" placeholder="Name" />
                </div>
                <div className="email formRegel">
                    <label htmlFor="" className="label emial__label">Email*</label>
                    <input type="text" className="input emial__input" placeholder="Email" />
                </div>
                <div className="wachtwoord formRegel">
                    <label htmlFor="" className="label wachtwoord__label">Wachtwoord</label>
                    <input type="text" className=" input wachtwoord__input" placeholder="Email" />
                </div>
                <Link href="" className="forgot__password">forgot password?</Link>
            </form>
            
            <button className="login__button"><Link to="/collectiepage" className="login__button__limk">Log in </Link></button>
            
            
            <InlogSocialbuttons/>
        </div>
    )
}

export default Loginformulier;