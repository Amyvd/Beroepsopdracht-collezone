/*import components*/
import CollectieNav from "../CollectieNav/CollectieNav";
import Display from "./Display/Display";
import Form from "./Form/Form";

import "./Backlog.css";

const Backlog = () => {
    return (
        <>
            <CollectieNav />
            <main className="backlog">

                <Form />
                <Display />

            </main ></>
    )
}

export default Backlog;
