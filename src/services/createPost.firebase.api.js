import db from '../firebase';
import firebase from 'firebase';

export const createPost = ({catagory, title, description, content}) => {
  db.collection('posts').add({
    catagory: catagory,
    title: title,
    description: description,
    content: content,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }) 
}
