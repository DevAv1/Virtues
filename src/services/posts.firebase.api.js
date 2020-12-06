import db from '../firebase';

export const setPosts = async () => {
  try {
    db.collection('posts').onSnapshot(snapshot => {
      const postsData =  snapshot.docs.map(doc => doc.data())
      console.log('postsData from service fucntion', postsData);
      return postsData;
    })
  } catch(err) {
    console.error(err)
  }
  
}