import React, { useContext } from "react";
import { UsersContext } from "../Provider/UserProvider";
import { MissilesContext } from "../Provider/MissileProvider";
import { OrganizationContext } from "../Provider/OrganozationProvider";
import { Link, NavLink } from "react-router-dom";


const HomePage = () => {
  // const { users, setUsers } = useContext(UsersContext);
  // const { missiles, setMissiles } = useContext(MissilesContext);
  // const { organization,setOrganization } = useContext(OrganizationContext);

  return (
    <>
      <h3>welcome to store of gans</h3>
      <h4>if you wont to by gan you need to register 👇</h4>

      <Link to={"/users/add"}>
        <button>REGISTER</button>
      </Link>

      
      
      
    </>
  );
};

export default HomePage;
