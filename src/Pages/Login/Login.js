import React, { useState } from 'react'
import "./Login.css"
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../Component/FirebaseConfig/firebase'

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("logged in")
        history.push("/")
      })
      .catch((e) => alert(e.message))
  }

  const register = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("User Creaed logged in")
        history.push("/")
      })
      .catch((e) => alert(e.message))
  }
  return (
    <div className="login">
      <Link to="/" >
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="" className="login__logo" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button
            type="submit"
            onClick={login}
            className="login_signInBtn">Sign In</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button className="login_createAccBtn" onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
