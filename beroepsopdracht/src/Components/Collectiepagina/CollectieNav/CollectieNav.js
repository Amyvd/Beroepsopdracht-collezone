import { Link } from "react-router-dom";

import ShareButton from "../../../Components/shareUrl/ShareUrl";

import "./CollectieNav.css";

const CollectieNav = () => {
    const url = 'http://localhost:3001/collectiepage';
    return (
        <nav className="collectieNavigation">
            <h1 className="collectieNavigation__logo">Logo</h1>
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
                    <Link ><ShareButton url={url}  /></Link>
                </li>
            </ul>
        </nav>
    )
}

export default CollectieNav;