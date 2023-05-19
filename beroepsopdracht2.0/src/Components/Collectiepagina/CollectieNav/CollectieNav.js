import { Link } from "react-router-dom";

import "./CollectieNav.css";

const CollectieNav = () => {
    return (
        <nav className="collectieNavigation">
            <ul className="collectieNavigation__list">
                <li className="collectieNavigation__listItem">
                    <Link to="/collectiepage" className="collectieNavigation__listItem__Link">Collectie</Link>
                </li>
                <li className="collectieNavigation__listItem">
                    <Link to="/backlog" className="collectieNavigation__listItem__Link">Backlog</Link>
                </li>
                <li className="collectieNavigation__listItem">
                    <Link to="/Contactpage" className="collectieNavigation__listItem__Link">Contact</Link>
                </li>
                <li className="collectieNavigation__listItem">
                    <Link to="/loguit" className="collectieNavigation__listItem__Link">Logout</Link>
                </li>
                <li className="collectieNavigation__listItem">
                    <Link to="" className="collectieNavigation__listItem__Link">Delen</Link>
                </li>
            </ul>
        </nav>
    )
}

export default CollectieNav;