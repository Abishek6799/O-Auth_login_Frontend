import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OAuthCallback = ({ setToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");
    if (token) {
      setToken(token);
      localStorage.setItem("token", token);  
      navigate("/welcome");  
    } else {
      navigate("/"); 
    }
  }, [navigate, setToken]);

  return <div>Loading...</div>;
};

export default OAuthCallback;
