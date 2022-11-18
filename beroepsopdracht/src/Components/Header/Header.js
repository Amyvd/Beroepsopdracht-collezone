/*import files*/
import Wrapper from "./Wrapper/Wrapper"
import Navigation from "./Navigation/Navigation";

import "./Header.css";

/*css import files*/
const Header = (props) => {
    return(
        <header className="header">
            <Navigation/>
            <Wrapper/>
        </header>
    );
}

export default Header;