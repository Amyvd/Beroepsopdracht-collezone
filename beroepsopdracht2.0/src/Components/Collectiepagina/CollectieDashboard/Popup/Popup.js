import React, { useState, useEffect } from "react";
import "./Popup.css";

const Popup = (props) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput(props.cardClicked.name);
  }, [props.cardClicked]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const addProduct = () => {
    if (input !== "") {
      props.addButtonClicked(input);
    }
  };

  const editProduct = () => {
    props.editButtonClicked(input);
  };

  let button = (
    <button onClick={addProduct} className="popup__button">
      Voeg toe
    </button>
  );
  if (props.editMode === true) {
    button = (
      <button onClick={editProduct} className="popup__button">
        Pas aan
      </button>
    );
  }

  
  

  return (
    <article className="popup">
      
      <div className="popup__wrapper">
        <img className="popup__image" src={props.cardClicked.img} alt="" />
        <label htmlFor="name" className="popup__label">
          Naam
        </label>
        <input
          onChange={handleInputChange}
          value={input}
          type="text"
          className="popup__input"
          id="name"
        />
        <p className="popup__price">Prijs: {props.cardClicked.price}</p>
        <p className="popup__beschrijving">
          Beschrijving: {props.cardClicked.description}
        </p>
        {button}
      </div>
    </article>
  );
};

export default Popup;
