import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Blogs from "./components/Blogs";
import { useSelector } from "react-redux";
import { selectSignedIn } from "./store/userSlice";

function App() {

  const isSignedIn = useSelector(selectSignedIn);

  return (
    <>
     <Navbar/>
     <Homepage/>
     {isSignedIn && <Blogs/>}
    </>
  );
}

export default App;
