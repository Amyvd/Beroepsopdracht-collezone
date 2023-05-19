import "./FilterButtons.css";


const Filter = ({buttonText, button1, button2}) => {



    return(
        <section className="FilterButtons">
            <button className="FilterButton"> {buttonText}{button1 || "Placeholder"}</button>
            <button className="FilterButton" > {buttonText}{button2 || "Placeholder"}</button>
        </section>
    )
}

export default Filter;