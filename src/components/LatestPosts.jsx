import React, { useEffect } from 'react';
import '../styles/latestPosts.css';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import InstagramIcon from '@material-ui/icons/Instagram';

export const LatestPosts = ({ posts }) => {
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

    const userFeed = new window.Instafeed({
      get: 'user',
      target: "instagram-output",
      limit: 10,
        resolution: 'low_resolution',
        accessToken: 'IGQVJXUFg0WjdGc00wR3ZAFbTRIT1J2SlJFSDhtMWR3MXRJVF9jSUZAZAdUNlcEJKY1V3ZA1pldmNjOVpLS2RFbEp4c2hyemxhVkt1RE10ckFLZAXduaGZAmU0VyUnBtUXNDT0ZANQ01ZAZAjFIODZAwc1FqYm91dAZDZD'
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
                while(i < 4) {
                  return (
                    <Link to={`/post/${post.id}`} params={post}>
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
                            {/* <ArrowBackIosIcon id="arrow"/> */}
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                        </CardActions>
                      </Card>
                    </Link>
                    
                  )
                }
              })
            }
          </div>
          <div className="instagram_feed" >
            <h1>FOLLOW ME</h1>
            <a id="hashtag" href="https://www.instagram.com/limorsror/" target="_blank"><InstagramIcon />limorsror </a>
            
            <div id="instagram-output"></div>
          </div>
        </div>
      </div>
  )
}