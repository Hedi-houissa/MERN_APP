/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { currentUser, toogleTrue } from "../../JS/action/UserAction";
import './Profile.css'

function Profile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const user = useSelector((state) => state.userReducer.user);


  return (
    <div className="page_center" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-xl-6 col-md-12">
            <div className="card user-card-full">
              <div className="row m-l-0 m-r-0">
                <div className="col-sm-4 bg-c-lite-green user-profile">
                  <div className="card-block text-center text-white">
                    <div className="m-b-25">
                      <img
                        src="https://img.icons8.com/bubbles/100/000000/user.png"
                        className="img-radius"
                        alt="User-Profile-Image"
                      />
                    </div>
                    <h3 className="f-w-600">{user.firstname}</h3>
                    <h5>{user.lastname}</h5>
                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="card-block">
                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                      Information
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Email</p>
                        <h6 className="text-muted f-w-400">{user.email}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Phone</p>
                        <h6 className="text-muted f-w-400">{user.phone}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">city</p>
                        <h6 className="text-muted f-w-400">{user.city}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">adresse</p>
                        <h6 className="text-muted f-w-400">{user.adresse}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">code postal</p>
                        <h6 className="text-muted f-w-400">{user.postal_code}</h6>
                      </div>
                      
                    </div>
                    <Link to='/editProfile' onClick={() => dispatch(toogleTrue())} >
                    <button type="button" class="btn btn-primary">Modifier info</button>
                    </Link>
                    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                      Nom utilisateur et mot de passe 
                    </h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Nom utilisateur</p>
                        <h6 className="text-muted f-w-400">{user.username}</h6>
                      </div>
                      <div className="col-sm-6">
                        <p className="m-b-10 f-w-600">Mot de passe</p>
                        <h6 className="text-muted f-w-400">*****************</h6>
                      </div>
                    </div>
                    <Link to='/editPassword'>

                    <button type="button" class="btn btn-primary">Modifier info</button>
                   </Link>
        
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
