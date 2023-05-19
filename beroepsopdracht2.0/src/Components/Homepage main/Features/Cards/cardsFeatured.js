import "./cardsFeatured.css";

const FeaturedCard = ({imageFeatured, title }) => {
    return(
        <article className="cardfeature">
            <header className="cardfeature__header">
                <h4 className="cardfeature__header__title">{title || "Placeholder Totle"}</h4>
            </header>
            <section className="cardfeature__section">
                <figure className="cardfeature__section__figure">
                    <img src={imageFeatured ||  "placeholderimage"} alt="" className="cardfeature__section__figure__image"/>
                </figure>
            </section>
        </article>
    )
}

export default FeaturedCard;