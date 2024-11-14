import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {UsersContext} from "../Provider/UserProvider";

interface User {
  _id?: string;
  username: string;
  password: string;
  organization: string;
  zone?: string;
}


const NewUser = () => {
  const { users, setUsers } = useContext(UsersContext);
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [organization, setorganization] = useState("");
  const [zone, setzone] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const neuUser  = { username, password, organization, zone };
    setUsers([...users, neuUser]);

    
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">USER NAME</label>
            <input
              id="username"
              type="text"
              value={username}
              placeholder="username"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="organization">organization</label>
            <input
              id="organization"
              type="text"
              value={organization}
              placeholder="organization"
              onChange={(event) => {
                setorganization(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="zone">zone</label>
            <input
              id="zone"
              type="text"
              value={zone}
              placeholder="zone"
              onChange={(event) => {
                setzone(event.target.value);
              }}
            />
          </div>
         
        </form>
        <Link to={"/users"}>
          <button type="submit">Add a new user</button>
        </Link>
      </div>
    </>
  );
};

export default NewUser;
