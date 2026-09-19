import React from "react";
import { useParams } from "react-router";

const UserPage = () => {
  const { id } = useParams<"id">();

  return (
    <div>
      <p>
        User ID: <span className="text-xl font-semibold text-blue-600">{id}</span>
      </p>
    </div>
  );
};

export default UserPage;
