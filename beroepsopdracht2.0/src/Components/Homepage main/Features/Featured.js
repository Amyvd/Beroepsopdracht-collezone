/* import components */
import FeaturedCard from "./Cards/cardsFeatured";

/* import data */
import FeaturedcardData from "../../Data/Homepage/featuredcard/featuredcarddata";

/* import css files */
import "./Featured.css";

/*import lines */
import Lines from "../Lines/Line1/Lines";
import Line2 from "../Lines/Line2/Line2";

/*import images svg/pngs*/

const FeaturedMainPage = (props) => {

    let featuredDatasheetMainpage = FeaturedcardData.FeaturedcardDatas.map(featurecarddata => {
        return <FeaturedCard imageFeatured={featurecarddata.Icon} title={featurecarddata.Heading} subjectFeatured={featurecarddata.Beschrijving} />
    })
    return (
        <>
            <Lines />
            <section className="Featuredmainpage">

                <header className="Featuredmainpage__header">
                    <h3 className="Featuredmainpage__header__title">
                        Features
                    </h3>
                </header>
                <main className="Featuredmainpage__main">
                    {featuredDatasheetMainpage}
                </main>
            </section>
            <Line2 />
        </>

    )
}
export default FeaturedMainPage;