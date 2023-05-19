/*import files*/
import Wrapper from "./Wrapper/Wrapper"
import Navigation from "./Navigation/Navigation";


/*css import files*/
import "./Header.css";

const Header = () => {
    return(
        <header className="header">
            <Navigation/>
            <Wrapper/>
        </header>
    );
}

export default Header;