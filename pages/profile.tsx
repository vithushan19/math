import React, { useContext } from "react";
import DiagnosticNavbar from "../components/DiagnosticNavbar";
import ProfileComponent from "../components/ProfileComponent";

import { UserContext } from "../lib/UserContext";

const Profile = () => {
  const [user] = useContext(UserContext);
  return (
    <div>
      <DiagnosticNavbar />
      {user?.loading ? (
        "Loading..."
      ) : (
        user?.issuer && (
          <>
            <div className="label">Email</div>
            <div className="profile-info">{user.email}</div>

            <div className="label">User Id</div>
            <div className="profile-info">{user.issuer}</div>
          </>
        )
      )}
      <style jsx>{`
        .label {
          font-size: 12px;
          color: #6851ff;
          margin: 30px 0 5px;
        }
        .profile-info {
          font-size: 17px;
          word-wrap: break-word;
        }
      `}</style>
      <ProfileComponent />
    </div>
  );
};

export default Profile;

Profile.auth = true;
