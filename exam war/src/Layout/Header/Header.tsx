import { NavLink } from "react-router-dom";
import Link_nav_bar from "../../Components/Link_Nav_Bar";

const Header = () => {
  return (
    <>
      <header >
        <h1>WAR APP</h1>
        

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
