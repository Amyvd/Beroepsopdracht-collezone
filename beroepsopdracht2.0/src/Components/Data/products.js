
/* Images webshop */
import image1 from "../../img/product1.jpg";
import image2 from "../../img/product2.jpg";
import image3 from "../../img/product3.jpg";
import image4 from "../../img/product4.jpg";
import image5 from "../../img/product5.jpg";
import image6 from "../../img/product6.jpg";
import image7 from "../../img/product7.jpg";
import image8 from "../../img/product8.jpg";

const products =  [
    {
        id: 1,
        name: "Placeholder"
    },
    {
        id: 2,
        name: "Jordan",
        img: image1,
        price: "$" + "130",
        categorie: ["Schoenen"],
        materials: ["COTTON", "WOOL", "POLYESTER", "NYLON", "RUBBER", "LEATHER",],
        description: "De nieuwste Jordan. Gemaakt uit 100% Recyclebare producten!",
    },
    {
        id: 3,
        name:" Yellow Beanie",
        img: image2,
        price: "$" + "130",
        categorie: ["Accesiores"],
        materials: ["COTTON", "WOOL", "POLYESTER", "NYLON", "RUBBER", "LEATHER",],
        description: "De nieuwste Jordan. Gemaakt uit 100% Recyclebare producten!",
    },
    {
        id: 4,
        name: "Red White Colored Cap",
        img: image3,
        price: "$" + "130",
        categorie: ["Kleding"],
        materials: ["COTTON", "WOOL", "POLYESTER", "NYLON", "RUBBER", "LEATHER",],
        description: "Een oldschool . Gemaakt uit 100% Recyclebare producten!",
    },
    {
        id: 5,
        name:"Yellow Hood for the hood",
        img: image4,
        price: "$" + "130",
        categorie: ["Kleding"],
        materials: ["COTTON", "WOOL", "POLYESTER", "NYLON", "RUBBER", "LEATHER",],
        description: "De nieuwste Hoodie. Gemaakt uit 100% Recyclebare producten!",
    },
    
];

export default {products};