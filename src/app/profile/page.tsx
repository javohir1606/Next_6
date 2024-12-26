import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/config/auth-options";

const Profile = async () => {
  const data = await getServerSession(authOptions);
  console.log(data, "data");

  return <div>Profile</div>;
};

export default Profile;
