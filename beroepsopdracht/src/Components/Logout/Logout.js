import Navigation from "../Header/Navigation/Navigation";


import "./Logout.css";

const Logout = () => {
    return (
        <>
            <Navigation />
            <section className="uitgelogt">
                <h2 className="uitgelogt__Title">Je bent Uitgelogt</h2>
                <p className="uitgelogt__emoji">😥</p>
            </section>
        </>
    )
}

export default Logout;