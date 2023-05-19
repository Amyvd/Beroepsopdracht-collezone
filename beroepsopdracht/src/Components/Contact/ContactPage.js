/*import components*/
import Navigation from "../Header/Navigation/Navigation";
import Footer from "../Footer/Footer";

/*import formulier*/
import ContactPageFormulier from "./ContactPageFormulier/ContactPageFormulier";

/*import css files*/
import "./ContactPage.css";

const Contactpage = () => {
    return (
        <>
            <Navigation />
            <main className="ContactPage__main">
                <ContactPageFormulier/>
            </main>
            <footer>
                <Footer/>
            </footer>

        </>
    )
}

export default Contactpage;