/*import components files voor Main hoofdpagina*/
import Overons from "./Overons/Overons";
import FeaturedMainPage from "./Features/Featured";
import ProductSection from "./Producten/ProductsectionMainpage";
import Contactsection from "./ContactMainPage/ContactMainPage";

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import ImageOverons from "../../img/overonssection.jpg";
import imageWaveFeatured from "../../img/wave.svg";
import ProductSectionBackground from "../../img/backgroundpriceSectionMainpagepng.png";

import "./Main.css";

const Homepage = () => {
    return(
        <main >
            <Header/>
            <Overons overonsAfbeelding={ImageOverons} overonSectionTitle="Af Clothing" overOnsSectionText="Bij Af designs verkopen wij Streetware kleding die voor iedereen gemaakt is. Tegenwoordig kent iedereen de Streetware trend. Lekker op de bank een comfortable Outfitje die lekker en warm is."/>
            <FeaturedMainPage featuredWaveImage={imageWaveFeatured}/>
            <ProductSection background={ProductSectionBackground}/>
            <Contactsection/>

            <Footer/>

        </main>
    )
}

export default Homepage;