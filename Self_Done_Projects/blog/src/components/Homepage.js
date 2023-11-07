import React from 'react'
import { useSelector } from 'react-redux'
import { selectSignedIn } from '../store/userSlice'
import './Homepage'

const Homepage = () => {

  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn ? (
        <div className="login__message">
          <h2>📗</h2>
          <h1>A Readers favourite place!</h1>
          <p>
            We provide high quality online resource for reading blogs. Just sign
            up and start reading some quality blogs.
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default Homepage
