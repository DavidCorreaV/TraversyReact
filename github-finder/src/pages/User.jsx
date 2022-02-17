import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/Github/GithubContext";

const User = () => {
  const { getUser, user } = useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>This is {user.login}</div>;
};

export default User;
