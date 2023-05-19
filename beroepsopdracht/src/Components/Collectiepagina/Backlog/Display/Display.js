import { useSelector } from "react-redux";
import "./Display.css";

const Display = (props) => {
    const filteredGames = useSelector(state => { return state })

    let firstToBeRendered = false;

    const titlesToBeRendered = filteredGames.map(backlogProductDisplay => {
        console.log("display filter");
        if (!firstToBeRendered) {
            firstToBeRendered = true;
            return (
                <section className="display" key={backlogProductDisplay.title}>
                    <h2>{backlogProductDisplay.title}</h2>
                   
                    <figure className="display__play">Play this!</figure>
                </section>
            );
        }
        return (
            <section key={backlogProductDisplay.title} className="display">
                <h2 className="backlog__display__title">{backlogProductDisplay.title}</h2>
                
            </section>
        );
    })

    return (
        <>
            {titlesToBeRendered}
        </>
    )
}

export default Display;