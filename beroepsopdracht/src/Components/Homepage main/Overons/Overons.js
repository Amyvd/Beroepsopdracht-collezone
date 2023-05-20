/*import afbeeldingen*/

import "./Overons.css";

const Overons = (props) => {
    return(
        <article className="overonsSection">
            <header className="overonsSection__header">
                <h3 className="overonsSection__header_Title">{props.overonSectionTitle || "Placeholder"}</h3>
            </header>
            <section className="overonsSection__section">
                <p className="overonsSection__section_paragraaf">{props.overOnsSectionText || "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum sint molestias natus dolores. Rerum voluptates laborum tenetur suscipit perspiciatis, aliquam, expedita, natus earum nam possimus quisquam laboriosam similique deleniti numquam!"}</p>
            </section>
            
        </article>
    )
}
export default Overons;