import React from "react";
import "typeface-roboto";
import Summary from "./summary/Summary";
import "./UserProfile.scss";

const UserProfile: React.FC = () => (
  <div className="user-profile">
    <Summary />
  </div>
);

export default UserProfile;
