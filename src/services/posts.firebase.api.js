import db from '../firebase';
import { posts } from '../store/reducers/posts';

export const setPosts = new Promise ((resolve, reject) => {
    db.collection('posts').onSnapshot(snapshop => {
    const posts = snapshop.docs.map(doc => doc.data())
    resolve(posts);
  }) 
})
 

  // db.collection('posts').onSnapshot(snapshot => {
  // const posts =  snapshot.docs.map(doc => doc.data())
  // console.log(posts);
  // })
  

 
   
