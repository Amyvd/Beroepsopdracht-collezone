import React, { useState } from "react";
/*import components*/
import CollectieNav from "./CollectieNav/CollectieNav";
import Filter from "./Filter/FilterButtons";

import Dashboard from "./CollectieDashboard/Dashboard/Dashboard";
import Footer from "../Footer/Footer";

/*import css */
import "./CollectiepaginaMain.css";

const CollectiePaginaMain = () => {

    return (
        <section className="CollectiePaginaMain">
            <header>
                <CollectieNav />
                
            </header>
            <main>
                <Dashboard />
            </main>
            <footer>
                <Footer />
            </footer>
        </section >
    )
}

export default CollectiePaginaMain;