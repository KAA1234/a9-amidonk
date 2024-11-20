import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <nav>
                <Link to="/homePage">Home Page</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/order">Order</Link>
                <Link to="/staff">Staff</Link>
                <Link to="/topicsPage">Topics Page</Link>
                <Link to="/collectablesPage">Collectables</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </>
    )
}

export default Navigation;