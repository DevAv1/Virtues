import db from '../firebase';
import firebase from 'firebase';

export const setPosts = () => {
  return new Promise((resolve, reject) => {
    db.collection('posts').onSnapshot(snapshot => {
    const posts = snapshot.docs.map(doc => ({...doc.data(), id:doc.id}))
    resolve(posts);
    })
  })
}

export const editPost = async (post) => {
  db.collection("posts").doc(post.id).set({
    catagory: post.catagory,
    title: post.title,
    description: post.description,
    content: post.content
  })
}


export const deletePost = async (post) => {
  db.collection("posts").doc(post.id).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});db.collection("cities").doc("DC").delete().then(function() {
  console.log("Document successfully deleted!");
}).catch(function(error) {
  console.error("Error removing document: ", error);
});
return post.id
}



export const createPost = async ({catagory, title, description, content, imageURL}) => {
    const res = await db.collection('posts').add({
    catagory: catagory,
    title: title,
    description: description,
    content: content,
    image: imageURL,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }) 
  if(res) {
    const resPost = db.collection("posts").doc(res.id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return(doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.error("No such document!");
      }
    }).catch((error) => {
      console.error("Error getting document:", error);
    });
    return resPost;
  }
  
}

