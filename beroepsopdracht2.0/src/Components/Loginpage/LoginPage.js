/*import components*/
import Navigation from "../Header/Navigation/Navigation";
import Loginformulier from "../Loginpage/LoginFormulier/Loginformulier";
import Footer from "../Footer/Footer";


/* import css files*/
import "./LoginPage.css";

const Login = () => {
    return (
        <>
            <Navigation />
            <main className="LoginPage">
                <Loginformulier/>
            </main>
            <Footer/>
        </>
    );
}

export default Login;