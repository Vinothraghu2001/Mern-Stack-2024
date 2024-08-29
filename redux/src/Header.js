import { NavLink } from "react-router-dom";

function Header (){
    return(
        <div className="NavBarLink"> 
            <NavLink to={"/Home"}> Home </NavLink>
            <NavLink to={"/About"}> About </NavLink>
            <NavLink to={"/Contact"}> Contact </NavLink>
        </div>
    );
}

export default Header;