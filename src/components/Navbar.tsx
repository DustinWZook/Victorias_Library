import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar">
            <h2 className="logo">Victoria's Library</h2>

            <div className="nav-links">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/library">Library</NavLink>
                <NavLink to="/loans">Loans</NavLink>
                <NavLink to="/friends">Friends</NavLink>

            </div>
        </nav>
    )
}