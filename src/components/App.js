import React from 'react'
import '../App.css';
import Admin from './admin/Admin'
import Header from './Header'
import Footer from './Footer';
import { Posts } from '../components/Posts';
import { Post } from '../components/Post';
// import  Signup  from '../components/admin/Signup';
import { AuthProvider } from '../Auth';
import PrivateRoute from '../PrivateRoute';
import Login from './admin/Login';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
            <Switch>  
              <PrivateRoute exact path="/admin" component={Admin} />
              <Route exact path="/post" component={Post} />
              <Route exact path="/" component={Posts} />
              {/* <Route exact path="/signup" component={Signup}/> */}
              <Route exact path="/login" component={Login} />
            </Switch>
            <Footer />
        </div>
      </Router>
    </AuthProvider>
    
  );
}