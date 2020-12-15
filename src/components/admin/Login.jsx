import React, { useState, useCallback, useContext } from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom';
import '../../styles/login.css';
import { AuthContext } from '../../Auth';
import firebaseApp from '../../firebase';
import {
  Form,
  Button,
  Card
} from 'react-bootstrap'
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
    <div className="login container">
      <Card className="form-card">
        <h2 className="text-center mb-4"><b>Login</b></h2>
        <Form>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" value={email} required/>
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" value={password} required/>
          </Form.Group>
         
          <Button onClick={handleLogin} type="submit" className="w-100">Sign In</Button>
        </Form>
      </Card>
  </div>
  )
}

export default withRouter(Login)
