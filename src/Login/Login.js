import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";
import facebookLogo from "../Assets/facebookLogo.svg";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    //Sign In
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={facebookLogo} alt="" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
