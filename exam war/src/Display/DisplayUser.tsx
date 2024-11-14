import { useContext } from "react";
import { UsersContext } from "../Provider/UserProvider";
import { Link, NavLink } from "react-router-dom";
import PageHeader from "../Pages/PageHeader";

const DisplayUsers = () => {
  const { users, setUsers } = useContext(UsersContext);
  return (
    <>
      <PageHeader title="user page" subTitle="list of users" />
      <div className="card-list">
        {users.map((user) => (
          <div key={user._id} className="card">
            <h3>Name: {user.username}</h3>
            <p>ORGANIZATION: {user.organization}</p>
            <p>ZONE: {user.zone}</p>
            
              {/* <NavLink to={"/missiles/"}><button>buy</button></NavLink> */}
            

            <button
              onClick={() =>
                setUsers(users.filter((prevuser) => prevuser._id !== user._id))
              }
            >
              Delete
            </button>
            {/* <button onClick={() => addStart(user)}>Add to stars</button> */}

            {/* {flag && <EditUser editUser={updateUser} user={user} />} */}
          </div>
        ))}
      </div>
      <Link to={"/users/add"}>
        <button>ADD USER</button>
      </Link>

      {/* <Link to={"/users/login"}>
        <button>Login</button>
      </Link> */}
    </>
  );
};

export default DisplayUsers;
