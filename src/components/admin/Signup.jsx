import React, { useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import firebaseApp from '../../firebase';
import '../../styles/signup.css';
import {
  Form,
  Button,
  Card
} from 'react-bootstrap'

const Signup = ({ history }) => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')

  const handleSignup = async (event) => {
    event.preventDefault();
    // const { email, password } = event.target.elements; 
    try {
      await firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password);
      history.push("/");
    } catch(error) {
      alert(error);
    }
  }

  /*

  const handleSignup = useCallback(async event => {
    event.preventDefault();
    // const { email, password } = event.target.elements; 
    try {
      debugger;
      await firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password);
      history.push("/");
    } catch(error) {
      alert(error);
    }
  }, [history])
  */

  return (
    <div className="signup">
      <Card className="form-card">
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => {
              debugger; 
              setPassword(e.target.value)}} required/>
          </Form.Group>
          <Form.Group id="password-confirm">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type="password" value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)} required/>
          </Form.Group>
          <Button onClick={handleSignup} type="submit" className="w-100">Sign Up</Button>
        </Form>
      </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? Log in
        </div>
    </div>
  )
}

export default withRouter(Signup);