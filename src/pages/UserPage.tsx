import React from "react";
import { useParams } from "react-router";

const UserPage = () => {
  const { id } = useParams<"id">();

  return (
    <div>
      <p>User ID: {id}</p>
    </div>
  );
};

export default UserPage;
