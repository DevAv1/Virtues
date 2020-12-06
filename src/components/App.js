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
  Route,
} from "react-router-dom";


export const App = () => {
  // const [ posts, setPosts ] = useState([])

  // useEffect(() => {
  //   db.collection('posts').onSnapshot(snapshot => {
  //      setPosts(snapshot.docs.map(doc => doc.data()))
  //   })
   
  // }, [])

  // console.log(posts)

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
            <Route exact path="/admin" component={Admin}>
              <Admin/>
            </Route>
            {/* <Beauty /> */}
          </Switch>
          <Posts />
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