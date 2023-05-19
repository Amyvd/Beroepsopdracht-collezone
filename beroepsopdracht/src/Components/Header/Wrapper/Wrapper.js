import "./Wrapper.css";
const Wrapper = (props) => {
    return (
        <article className="wrapper">
            <div className="wrapper__content">
                <header className="wrapper__header">
                    <h1 className="wrapper__title">Collezone</h1>
                </header>
                <section className="wrapper__section">
                    <p className="wrappersection__paragraf">Ben jij opzoek naar Speciale Custom kleding. Koopt het nu Bij ons!!</p>
                    <button className="wrapper__button">Koop Nu</button>
                </section>
            </div>
        </article>
    );
}

export default Wrapper;