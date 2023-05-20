/*import components*/
import CollectieNav from "./CollectieNav/CollectieNav";
import Dashboard from "./CollectieDashboard/Dashboard/Dashboard";


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
        
        </section >
    )
}

export default CollectiePaginaMain;