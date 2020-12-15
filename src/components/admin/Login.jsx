import React, { useState, useContext } from 'react'
import { withRouter, Redirect } from 'react-router-dom';
import '../../styles/login.css';
import { AuthContext } from '../../Auth';
import firebaseApp from '../../firebase';
import {
  Button
} from '@material-ui/core'
const Login = ({ history }) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleLogin = async (event) => {
      event.preventDefault();
      try {
        await firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password);
        history.push("/admin");
      } catch (error) {
        alert(error)
      }
    }

  const { currentUser } = useContext(AuthContext);
  if( currentUser ) {
    return <Redirect to="/admin" />;
  }

  return (
    <div className="login">
      <div class="container">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <h2>Please Sign In</h2>
          <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} required placeholder="email"/>
          <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} required placeholder="password"/>
          <h2>&nbsp;</h2>
          <Button variant="secondary" className="submit-btn" onClick={handleLogin} type="submit">Log In</Button>
        </div>
      </div>
  </div>
  )
}

export default withRouter(Login)
