import React from 'react';
import '../styles/latestPosts.css';
import InstagramEmbed from 'react-instagram-embed';

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

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="latest-posts">
      <div className="latest_posts_wrapper">
        <div className="latest_header">
          <h3>פוסטים אחרונים</h3>
          <div className="insta">
        <InstagramEmbed
          url='https://instagr.am/p/Zw9o4/'
          clientAccessToken='123|456'
          maxWidth={320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        </div>
          <hr/>
        </div>
        <div className="latest_posts_posts">
          {posts && 
            posts.map((post, i) => {
              while(i < 3) {
                return (
                  <Card id="card" className={`${classes.root}`} key={post.id}>
                    <CardActionArea>
                      <CardMedia
                        id="image"
                        className={classes.media}
                        image={post.image}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {post.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {truncate(post.description, 30)}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                   
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