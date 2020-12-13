import React from 'react';
import '../../styles/adminPosts.css';
import { deletePostAction, setPostAction } from '../../store/actions/posts.actions';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';

export const AdminPosts = ({ allPosts, handleEdit }) => {

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
      <div className="beauty_posts">
        {
          allPosts.map((item) => {
            if(item.catagory === "beauty") {
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
                        {item.catagory}
                      </Typography>
                      <Typography className="timestamp">
                      {item.timestamp.toDate().toString()}
                     </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    
                  <Button size="small" color="primary">
                    <DeleteIcon onClick={() => handleDelete(item)}/>
                  </Button>
                  <Button size="small" color="primary">
                    <EditIcon onClick={() => handleEdit(item)}/>
                  </Button>
                  <Button size="small" color="primary">
                    Click to see post
                  </Button>
                </CardActions>
              </Card>
                ) 
            }
          })
        }
      </div>
      <div className="body_soul_posts">
      {
        allPosts.map((item) => {
          if(item.catagory === "body and soul") {
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
                      {item.catagory}
                    </Typography>
                    <Typography className="timestamp">
                    {item.timestamp.toDate().toString()}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <DeleteIcon onClick={() => handleDelete(item)}/>
                  </Button>
                  <Button size="small" color="primary">
                    <EditIcon onClick={() => handleEdit(item)}/>
                  </Button>
                  <Button size="small" color="primary">
                    Click to see post
                  </Button>
                </CardActions>
              </Card>
            ) 
          }
        })
      }
      </div>
      <div className="life_posts">
      {
        allPosts.map((item) => {
          if(item.catagory === "life") {
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
                      {item.catagory}
                    </Typography>
                    <Typography className="timestamp">
                    {item.timestamp.toDate().toString()}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <DeleteIcon onClick={() => handleDelete(item)}/>
                  </Button>
                  <Button size="small" color="primary">
                    <EditIcon onClick={() => handleEdit(item)}/>
                  </Button>
                  <Button size="small" color="primary">
                    Click to see post
                  </Button>
                </CardActions>
              </Card>
            ) 
          }
        })
      }
      </div>
      <div className="food_posts">

      </div>
      
      
    </div>
  )
}