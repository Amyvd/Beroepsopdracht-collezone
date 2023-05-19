/* import components*/
import ProductKaarten from "./Productkaarten/Productkaarten";

/*importeer data sheets*/
import ProductDatas from "../../Data/Homepage/featuredcard/producten/productenData";

/* import css files  */
import "./ProductsectionMainpage.css";

const ProductSection = () => {
    /*een map functie die door de datasheet van Producten heen loopt*/
    let dataproducten = ProductDatas.ProductData.map(producten => {
        return <ProductKaarten image={producten.image} name={producten.name} prijs={producten.prijs} subjet={producten.beschrijving} />
    })
    return (
        <div className="Productsection__mainpage">
            <h3 className="productsection__header__title">Products</h3>
            <article className="productsection_kaarten">
                {dataproducten}
            </article>
        </div>
    )
}

export default ProductSection;