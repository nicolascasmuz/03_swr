import type { NextPage } from "next";
import { useEffect } from "react";
import LoginForm from "../../components/login-form";

const Login: NextPage = () => {
  useEffect(() => {
    localStorage.removeItem("saved-state");
  }, []);

  return <LoginForm />;
};

export default Login;
