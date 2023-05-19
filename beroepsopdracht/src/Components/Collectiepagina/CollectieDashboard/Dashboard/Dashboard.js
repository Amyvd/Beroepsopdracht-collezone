import React, { useState, useEffect } from "react";
import RightPane from "../RightPane/RightPane";
import Popup from "../Popup/Popup";
import chooseImage from "../helpers/chooseImage";
import productsObject from "../../../Data/products";
import "./Dashboard.css";

const Dashboard = () => {
    const [productCards, setProductCards] = useState([]);
    const [productPrice, setProductPrice] = useState([]);
    const [open, setOpen] = useState(true);
    const [cardClicked, setCardClicked] = useState({});
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setProductCards(productsObject.products);
    }, []);

    const onButtonClicked = () => {
        setOpen(!open);
    };

    const addButtonClicked = (inputFromPopup) => {
        const imageFromHelper = chooseImage(inputFromPopup);
        const toBeAdded = [
            {
                id: productCards.length + 1,
                name: inputFromPopup,
                img: imageFromHelper,
            },
        ];

        const mergedArrays = productCards.concat(toBeAdded);
        setProductCards(mergedArrays);
        setOpen(!open);
    }
    const editButtonClicked = (inputFromPopup) => {
        const updatedProductCards = productCards.map((product) => {
            if (cardClicked.id === product.id) {
                product.name = inputFromPopup;
                return product;
            } else {
                return product;
            }
        });
        setProductCards(updatedProductCards);
        setOpen(true);
    };

    const onCardClicked = (idFromCard) => {
        if (productCards[idFromCard - 1].name === "Placeholder") {
            setEditMode(false);
            setOpen(!open);
            setCardClicked(productCards[idFromCard - 1]);
            return;
        }
        setEditMode(true);
        setOpen(!open);
        setCardClicked(productCards[idFromCard - 1]);
    };

    console.table(cardClicked);

    if (open === true) {
        return (
            <>
                <article className="dashboard">
                    <Popup
                        editButtonClicked={editButtonClicked}
                        editMode={editMode}
                        cardClicked={cardClicked}
                        addButtonClicked={addButtonClicked}
                    />
                    <RightPane
                        onProductCardClicked={onCardClicked}
                        onButtonClicked={onButtonClicked}
                        productCards={productCards}
                        headerText="Mijn Producten"
                        buttonSymbol="+"
                        buttonText="Voeg een product toe"
                    />
                </article>
            </>
        );
    }

    return (
        <section>
            <Popup
                editButtonClicked={editButtonClicked}
                editMode={editMode}
                cardClicked={cardClicked}
                addButtonClicked={addButtonClicked}
            />
            <RightPane
                onProductCardClicked={onCardClicked}
                onButtonClicked={onButtonClicked}
                productCards={productCards}
                headerText="Mijn Producten"
                buttonSymbol="+"
                buttonText="Voeg een product toe"
            />
        </section>
    );
};

export default Dashboard;