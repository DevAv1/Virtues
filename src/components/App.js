import React from 'react'
import '../App.css';
// Import Components
import Admin from './admin/Admin'
import Header from './Header'
import Footer from './Footer';
import { Posts } from '../components/Posts';

import { 
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";


export const App = () => {
  // db.collection('posts').add({
  //   // here I need to pass the same structure
  //   title: title,
  //   description: description,
  //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
  // })
  return (
    <Router>
      <div className="App">
        <Header />
          <Switch>  
            <Admin exact path="/admin" component={Admin}/>
            <Posts />

          </Switch>
          <Footer />
      </div>
    </Router>
    
  );
}

// <Router>
// <div className="App">
//   <Header />
//   <div className="app-wrapper">
//     <Switch>
//       <Route exact path="/admin" component={Admin}>
//         <Admin/>
//       </Route>
//       <Beauty />
//     </Switch>
//   </div>
  
// </div>
// </Router>