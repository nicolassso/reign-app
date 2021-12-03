import {Link} from 'react-router-dom'
import './navbar.styles.scss'

function Navbar() {

    const currentPathName = window.location.href

    const handleClick = (p: any) => {
        const page = p.slice(p.lastIndexOf('/'))
        return page
    }
    const currentPage =  handleClick(currentPathName);
    

    return (
        <div className="navbar">
            <Link onClick={handleClick} 
            className={currentPage === '/' ? 'navbar-link active' : 'navbar-link'}
            to="/">
                <div className="rectangle">
                    <span>All</span>
                </div>
            </Link>
            <Link onClick={handleClick} 
            className={currentPage === '/faves' ? 'navbar-link active' : 'navbar-link'} to="/faves">
                <div className="rectangle">
                    <span>My faves</span>
                </div>
            </Link>

        </div>
    )
}

export default Navbar
