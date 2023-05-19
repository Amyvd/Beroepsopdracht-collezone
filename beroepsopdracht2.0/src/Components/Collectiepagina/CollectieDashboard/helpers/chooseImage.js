
import skyImage from "../../../../img/pexels-soubhagya-maharana-5245865.jpg";

import image1 from "../../../../img/product1.jpg";
import image2 from "../../../../img/product2.jpg";
import image3 from "../../../../img/product3.jpg";
import image4 from "../../../../img/product4.jpg";
import image5 from "../../../../img/product5.jpg";
import image6 from "../../../../img/product6.jpg";
import image7 from "../../../../img/product7.jpg";
import image8 from "../../../../img/product8.jpg";

function chooseImage(inputFromPopup ) {
    let toBeAddedImage;
    switch (inputFromPopup) {
        case ("Jordan"):
            toBeAddedImage = image1;
    
            break;
        case ("Yellow Cap"):
            toBeAddedImage = image2;
            break;
        case ("Red White Colored Cap"):
            toBeAddedImage = image3;
            break;
        case ("Yellow Hood for the hood"):
            toBeAddedImage = image4;
            break;
        case ("Grey sweater"):
            toBeAddedImage = image5;
            break;
        case ("Oversized tshirt"):
            toBeAddedImage = image6;
            break;
        case ("Denim jacket"):
            toBeAddedImage = image7;
            break;
        case ("Nike Quatred Socks"):
            toBeAddedImage = image8;
            break;
        default:
            toBeAddedImage = skyImage;
            break;
    }
    return toBeAddedImage;
}

export default chooseImage;
