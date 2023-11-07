import React, { useState } from 'react'
import './Navbar.css'
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@mui/material";
import {
  selectSignedIn,
  setInput,
  setSignedIn,
} from "../store/userSlice";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("tech");
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();


  const logoutHandler = (response) => {
    dispatch(setSignedIn("false"));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(setInput(inputValue));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(setSignedIn("true"));
  }

  return (
    <div className="navbar">
      <h1 className="navbar__header">Blog App 💬</h1>
      {isSignedIn && (
        <div className="blog__search">
          <input
            className="search"
            placeholder="Search for a blog"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="submit" onClick={clickHandler}>
            Search
          </button>
        </div>
      )}

      {isSignedIn ? (
        <form className="navbar__user__data">
          <Avatar
            className="user"
          />
          <button
            type='submit'
            onClick={logoutHandler}
            className="logout__button"
          >
            Logout 😦
          </button>
        </form>
      ) : (
        <h1 className="notSignedIn" id="login__handler" onClick={loginHandler}>Login</h1>
      )}
    </div>
  )
}

export default Navbar
