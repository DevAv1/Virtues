import React from 'react';
import '../styles/latestPosts.css';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';

export const LatestPosts = ({posts}) => {

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles();


  return (
    <div className="latest-posts">
      <div className="latest_posts_wrapper">
        <div className="latest_header">
          <h3>Latest Posts...</h3>
          <hr/>
        </div>
        <div className="latest_posts_posts">
          {posts && 
            posts.map((post, i) => {
              while(i < 3) {
                return (
                  <Card id="card" className={`${classes.root}`}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={post.image}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {post.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {post.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button variant="contained" color="secondary">
                      קראי עוד
                    </Button>
                    </CardActions>
                  </Card>
                )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}