import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../JS/action/UserAction";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const [user, setuser] = useState({ username: "", password: "" });
  const errors = useSelector((state) => state.userReducer.error);
  const change = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Login
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="column" id="main">
                <h1>Login </h1>
                <form>
                  <div className="form-group">
                    {errors && (
                      // .filter((err) => err.param === "username")
                      // .map((err, i) => (
                      <h6 style={{ color: "red" }}>{errors}</h6>
                    )}

                    <label htmlFor="exampleInputName">Nom d'utilisateur</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="exampleInputName"
                      value={user.username}
                      placeholder="nom d'utilisateur"
                      onChange={change}
                    />
                  </div>

                  <div className="form-group">
                    {errors && (
                      // .filter((err) => err.param === "password")
                      // .map((err, i) => (
                      <h6 style={{ color: "red" }} >
                        {errors}
                      </h6>
                    )}

                    <label htmlFor="exampleInputPassword1">Mot de passe </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={user.password}
                      placeholder="Password"
                      onChange={change}
                    />
                  </div>
                  <input
                    name="login"
                    type="button"
                    className="btn btn-primary"
                    value="login"
                    onClick={() => dispatch(loginUser(user))}
                  />
                </form>
              </div>
              <div>
                {/*?xml version="1.0" encoding="UTF-8"?*/}
                <svg
                  width="67px"
                  height="578px"
                  viewBox="0 0 67 578"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  {/* Generator: Sketch 53.2 (72643) - https://sketchapp.com */}
                  <title>Path</title>
                  <desc>Created with Sketch.</desc>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      d="M11.3847656,-5.68434189e-14 C-7.44726562,36.7213542 5.14322917,126.757812 49.15625,270.109375 C70.9827986,341.199016 54.8877465,443.829224 0.87109375,578 L67,578 L67,-5.68434189e-14 L11.3847656,-5.68434189e-14 Z"
                      id="Path"
                      fill="#F9BC35"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
