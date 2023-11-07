import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const registerHandler = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      if (userCredential.user) {
        navigate('/');  }
    } catch (err) {
      alert(err.message);
    }
  };

  const signInHandler = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      
      if (userCredential.user) {
        navigate('/');  }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="login__logo">
          <StorefrontIcon className="login__logoImage" fontSize="large" />
          <h2 className="login__logoTitle">eSHOP</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" ref={emailRef} />

          <h5>Password</h5>
          <input type="password" ref={passwordRef} />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signInHandler}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing in, you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={registerHandler}>
          Create your eShop Account
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
