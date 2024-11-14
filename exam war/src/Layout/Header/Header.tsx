import { NavLink } from "react-router-dom";
import Link_nav_bar from "../../Components/Link_Nav_Bar";

const Header = () => {
  return (
    <>
      <header >
        <h1>WAR APP</h1>
        {/* <ul className="navlink">
          <li><Link_nav_bar to="/users/home" InnerText="HOME"></Link_nav_bar> </li>
          <li><Link_nav_bar to="/users/about" InnerText="ABOUT"></Link_nav_bar> </li>
          <li><Link_nav_bar to="/users/home" InnerText="CARD"></Link_nav_bar> </li>
          <li><Link_nav_bar to="/users/Users" InnerText="USERS"></Link_nav_bar> </li>
            
         
        </ul> */}

        <div className="navlink">
          <NavLink to={"/home"}>HOME</NavLink>
          <NavLink to={"/missiles"}>STORE</NavLink>
          <NavLink to={"/users"}>USERS</NavLink>
          <NavLink to={"/organization"}>ORGANIZATION</NavLink>
          {/* <NavLink to={"/users/add"}>ADD</NavLink> */}
        </div>
      </header>
    </>
  );
};

export default Header;
