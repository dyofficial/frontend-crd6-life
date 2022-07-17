import React, { useEffect } from "react";
import { RiBankFill } from "react-icons/ri";
import PageLayout from "./PageLayout";
const Profile = ({ setRegister }) => {
  useEffect(() => {
    setRegister(true);
  }, []);

  return (
    <PageLayout>
      <div className="profile-profile">
        <div className="profile-head">
          <RiBankFill color="#ffc001" size="49px" />
          <span>Edit Profile</span>
        </div>
        <form className="profile-form">
          <div className="profile-top">
            <div className="logins">
              <span>Login</span>
              <input type="text" placeholder="ujbfvnjv" />
            </div>
            <div className="logins">
              <span>Name</span>
              <input type="text" placeholder="ujbfvnjv" />
            </div>
            <div className="logins">
              <span>Email</span>
              <input type="text" placeholder="ujbfvnjv" />
            </div>
          </div>
          <div className="profile-top">
            <div className="logins">
              <span>New Password</span>
              <input type="text" placeholder="ujbfvnjv" />
            </div>
            <div className="logins">
              <span>Confirm Password</span>
              <input type="text" placeholder="ujbfvnjv" />
            </div>
            <div className="logins">
              <span>Language</span>
              <input type="text" placeholder="ujbfvnjv" />
            </div>
          </div>
        </form>
      </div>
    </PageLayout>
  );
};

export default Profile;
