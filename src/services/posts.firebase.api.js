import db from '../firebase';

export const setPosts = new Promise ((resolve, reject) => {
    db.collection('posts').onSnapshot(snapshop => {
    const posts = snapshop.docs.map(doc => doc.data())
    resolve(posts);
  }) 
})
