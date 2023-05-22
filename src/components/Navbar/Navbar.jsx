import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
        <div className="nav-container">
            <h1>Logo</h1>
            <div className="nav-links">
                <ul className="nav-items">
                    <li className="nav-item"><a href="">Home</a></li>
                    <li className="nav-item"><a href="">Features</a></li>
                    <li className="nav-item"><a href="">Details</a></li>
                    <li className="nav-item"><a href="">Princing</a></li>
                </ul>
                <a className="nav-login">Log In</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;