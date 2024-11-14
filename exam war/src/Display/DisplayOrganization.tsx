import { useContext } from "react";
import { OrganizationContext } from "../Provider/OrganozationProvider";
import { Link, NavLink } from "react-router-dom";
import PageHeader from "../Pages/PageHeader";

const DisplayOrganizationMissiles = () => {
  const {organization,setOrganization } = useContext(OrganizationContext);
  
  return (
    <>
      <PageHeader title="store page" subTitle="list of organization" />
      <div className="card-list">
        {organization.map((org) => (
          <div key={org._id} className="card">
            
            <h3>Name: {org.name}</h3>
            <p>Budget: {org.budget}</p>
            <p>Resources Name: {org.resources.map((a) => (a.name))}</p>
            <p>Resources Amount: {org.resources.map((a) => (a.amount))}</p>
            {/* <button>
              <NavLink to={`/users/edit/${missile._id}`}>Edit</NavLink>
            </button> */}

            {/* <button
              onClick={() =>
                setMissiles(missiles.filter((prevmissiles) => prevmissiles._id !== missiles._id))
              }
            >
              Delete
            </button> */}
            {/* <button onClick={() => setFlag(true)}>Edit</button> */}
            {/* <button onClick={() => addStart(user)}>Add to stars</button> */}

            {/* {flag && <EditUser editUser={updateUser} user={user} />} */}
          </div>
        ))}
      </div>
      {/* <Link to={"/users/add"}>
        <button>ADD USER</button>
      </Link>

      <Link to={"/users/login"}>
        <button>Login</button>
      </Link> */}
    </>
  );
};

export default DisplayOrganizationMissiles;
