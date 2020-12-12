import React from 'react'
import '../App.css';
import Admin from './admin/Admin'
import Header from './Header'
import Footer from './Footer';
import { Posts } from '../components/Posts';
import { Post } from '../components/Post';
import { 
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
          <Switch>  
            <Admin exact path="/admin" component={Admin} />
            <Post expact path="/post" component={Post} />
            <Posts />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}