
import "./Navigation.css"
const Navigation = (props) => {
    return(
        <nav className="navigation">
            <ul className="navigation__ullist">
                <li className="navigation__item">
                        <img src=""></img>
                    </li>
                    <li className="navigation__items">
                        <a href="#" className="navigationList__items">Over</a>
                    </li>
                    <li className="navigation__items">
                        <a href="#" className="navigationList__items">Feature</a>
                    </li>
                    <li className="navigation__items">
                        <a href="#" className="navigationList__items">Prijs</a>
                    </li>
                    <li className="navigation__items">
                        <a href="#" className="navigationList__items">Contact</a>
                    </li>
                    <li className="navigation__item">
                        <button href="#" className="navigation__button">Login</button>
                    </li>
                
            </ul>
        </nav>
    );
}

export default Navigation;