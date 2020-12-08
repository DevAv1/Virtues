import React, {useState} from 'react';
import '../../styles/adminPosts.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { storage } from '../../firebase';

export const AdminPosts = ({ allPosts }) => {

  const [ image, setImage ] = useState(null);
  const [ url, setUrl ] = useState('');

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

  const classes = useStyles();

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }


  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      (snapshot) => {},
      error => {
        console.error(error)
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then( url => {
            setUrl(url)
          })
      }
    )
  }

  return (
    <div className="admin-posts">
     
      {allPosts.length > 0 ?
        allPosts.map((item,i) => {
          return (
            <Card className={`${classes.root} card`} key={item.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
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
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography>
                  {/* {item.id} */}
                </Typography>
                <Button size="small" color="primary">
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