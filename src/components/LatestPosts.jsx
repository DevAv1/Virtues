import React, { useEffect } from 'react';
import '../styles/latestPosts.css';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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


    var userFeed = new window.Instafeed({
      get: 'user',
      target: "instagram-output",
      limit: 4,
        resolution: 'low_resolution',
        accessToken: 'IGQVJVUTFsZAE9xVFo3dnlIRVVlSWg1OGo2cVVENWNOMVBEY25xTDY5TUc1cG5TQVh5cllKd3dta1M4RnROREU1ZAFBmb0JCazM5Q2d0cUdJbEJsX3dBODhaczYwZA2w1emlFSGJGWndkVTFhRk9JaHpqRgZDZD'
    });

    setTimeout(()=>{
      userFeed._options.template = '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>';
      userFeed.run();
    }, 0);
  
    return (
      <div className="latest-posts">
        <div className="latest_posts_wrapper">
          <div className="latest_header">
            <h3>פוסטים אחרונים</h3>
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
                        <CardContent className="card_content">
                          <Typography id="typo" gutterBottom variant="h5" component="h2">
                            {post.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {truncate(post.description, 30)}
                          </Typography>
                          <ArrowBackIosIcon id="arrow"/>
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
          <div className="instagram_feed">
            <h1>עקבו אחריי</h1>
            <span>@limorsror</span>
            <div id="instagram-output"></div>
          </div>
        </div>
      </div>
  )
}