import "./Productkaarten.css";

const ProductKaarten = ({ name, image, prijs, subjet }) => {
    return (
        <div className="productkaartSection">
            <article className="productKaarten">
                <header className="productenKaarten__header">
                    <figure className="productenKaarten__header__figure">
                        <img src={image} alt="" className="productenKaarten__header__figure__image" />
                    </figure>
                    <h4 className="productenKaarten__header__Title">{name || "Placeholder title"}</h4>

                </header>
                <section className="productenKaarten__Section">
                    <p className="productenKaarten__Section__price">{prijs || "Placeholder"}</p>
                    <p className="productenKaarten__Section__subjet">{subjet || "Placeholder"}</p>

                </section>
            </article>
        </div>
    )
}

export default ProductKaarten;