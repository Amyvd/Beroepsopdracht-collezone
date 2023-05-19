import "./ContactPageFormulier.css";

const ContactPageFormulier = () => {
    return (
        <article className="Contactwrapper">
            <header className="Contactwrapper__header">
                <h3 className="Contactwrapper__header__title">Contact</h3>
            </header>
            <section className="Contactwrapper__section">
                <form className="Contactwrapper__form">
                    <div className="contactpage__form__naam form__regel">
                        <label className="label__contactpage">Naam</label>
                        <input className="input__contactpage" placeholder="Naam"></input>
                    </div>
                    <div className="contactpage__form__email form__regel">
                        <label className="label__contactpage">Email</label>
                        <input className="input__contactpage" placeholder="Email"></input>
                    </div>
                    <div className="contactpage__form__subject form__regel">
                        <label className="label__contactpage">Subject</label>
                        <input className="input__contactpage" placeholder="Subject"></input>
                    </div>
                    <button className="contactpage__submit">Submit</button>
                </form>
                
            </section>
        </article>
    )
}
export default ContactPageFormulier;