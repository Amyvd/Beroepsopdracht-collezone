import "./ContactMainPage.css";

const Contactmainpagesection = () => {
    return (
        <div className="Contactmainpagesection">
            <h3 className="Contactmainpagesection__title">Contact</h3>
            <form action="" className="contactform">
                <div className="contactformlabel__invulform">
                    <label htmlFor="" className="contactform__label contactform__label__naam">Naam:</label>
                    <input type="text" placeholder="Naam" id="" className="contactform__input contactform__input__name" />
                </div>
                <div className="contactformlabel__invulform">
                    <label htmlFor="" className="contactform__label contactform__label__email">Email:</label>
                    <input type="text" placeholder="Email" id="" className="contactform__input contactform__input__email" />
                </div>
                <div className="contactformlabel__invulform">
                    <label htmlFor="" className="contactform__label contactform__label__subjet">Bericht:</label>
                    <input type="text" placeholder="Subject" id="" className="contactform__input contactform__input__subjet" />
                </div>
                <button className="contactform__button">Verzenden</button>
            </form>

        </div>
    )
}

export default Contactmainpagesection;