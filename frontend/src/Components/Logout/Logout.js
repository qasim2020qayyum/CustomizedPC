import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
    navigate("/login");
    window.location.reload(false);
  }, []);

  return <></>;
};

export default Logout;
