import React from 'react';
import '../../styles/adminPosts.css';
import { deletePostAction } from '../../store/actions/posts.actions';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { getPostsAction, createPostAction } from '../../store/actions/posts.actions';
import { getPostsSelector } from '../../store/selectors';
import { storage } from '../../firebase';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';

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
      {allPosts.length > 0 ?
        allPosts.map((item,i) => {
          return (
            <Card key={item.id} className={`${classes.root} card`} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="POST IMAGE"
                  height="140"
                  image={item.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                  </Typography>
                  {/* <Typography>
                    {item.content}
                  </Typography> */}
                </CardContent>
              </CardActionArea>
              <CardActions>
                
                <Button size="small" color="primary">
                  <DeleteIcon onClick={() => handleDelete(item)}/>
                </Button>
                <Typography>
                  {item.timestamp.toDate().toString()}
                </Typography>
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
      
    </div>
  )
}