import { useContext } from "react";
import { MissilesContext } from "../Provider/MissileProvider";
import { Link, NavLink } from "react-router-dom";
import PageHeader from "../Pages/PageHeader";

const DisplayMissiles = () => {
  const { missiles, setMissiles } = useContext(MissilesContext);

  return (
    <>
      <PageHeader title="store page" subTitle="list of gans" />
      <div className="card-list">
        {missiles.map((missile) => (
          <div key={missile._id} className="card">
            <h3>Name: {missile.name}</h3>
            <p>DESCRIPTION: {missile.description}</p>
            <p>SPEED: {missile.speed}</p>
            <p>INTERCEPTS: {missile.intercepts}</p>

            <p>PRICE: {missile.price}</p>

            <Link to={"/users"}>
          <button type="submit">buy the gan</button>
        </Link>
            
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

export default DisplayMissiles;
