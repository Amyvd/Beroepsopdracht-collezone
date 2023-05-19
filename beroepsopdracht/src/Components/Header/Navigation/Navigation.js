import { Link } from "react-router-dom";

import "./Navigation.css"

const Navigation = (props) => {
    
    return (
        <nav className="navigation">
            <ul className="navigation__ullist">
                <li className="navigation__item">
                    <Link to="/" className="navigationList__items">Home</Link>
                </li>
            
                <li className="navigation__items">
                    <Link to="/Contactpage" className="navigationList__items">Contact</Link>
                </li>
                <li className="navigation__item">
                    <Link to="/Login" className="navigation__button">Login</Link>
                </li>

            </ul>
        </nav>
    );
}

export default Navigation;