import { NavLink } from "react-router-dom";
import './hrader.css'


const Header = () => {
    return(
        <div className="header">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/service'>Service</NavLink>
        </div>
    );
};

export default Header;