import React from 'react';
import '../../styles/adminPosts.css';
import { deletePostAction } from '../../store/actions/posts.actions';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const AdminPosts = ({ allPosts }) => {

  const dispatch = useDispatch();

  const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
    },
  });

  const classes = useStyles();

  const handleDelete = (post) => {
    dispatch(deletePostAction(post))
  }

  return (
    <div className="admin-posts">
      {/* <CKEditor
        id="textare-editor"
        editor={ ClassicEditor }
        data="<p>Hello from CKEditor 5!</p>"
        onReady={ editor => {
            // You can store the "editor" and use when it is needed.
            // console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event, editor ) => {
            const data = editor.getData();
            // console.log( { event, editor, data } );
        } }
        onBlur={ ( event, editor ) => {
            // console.log( 'Blur.', editor );
        } }
        onFocus={ ( event, editor ) => {
            // console.log( 'Focus.', editor );
        } }
      /> */}

      {allPosts.length > 0 ?
        allPosts.map((item,i) => {
          return (
            <Card key={item.id} className={`${classes.root} card`} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="POST IMAGE"
                  height="140"
                  image='https://firebasestorage.googleapis.com/v0/b/virtues-4408e.appspot.com/o/images%2Fsmile_smiley_neon_146916_1920x1080.jpg?alt=media&token=5c94e334-22aa-4d9f-9c4f-e26b4e5ab23b'
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                  </Typography>
                  <Typography>
                    {item.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
                <Button size="small" color="primary">
                  <DeleteIcon onClick={() => handleDelete(item)}/>
                </Button>
                <Button size="small" color="primary">
                  Click to see post
                </Button>
              </CardActions>
          </Card>
          )
        })
        :
        <h1>No Posts...</h1>
      }
      {/* <input type="file" onChange={handleImageChange}/>
      <button onClick={handleUpload}>UPLOAD</button> */}
    </div>
  )
}