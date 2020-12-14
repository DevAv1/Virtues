import React from 'react';
import '../../styles/adminPosts.css';
import { deletePostAction, setPostAction } from '../../store/actions/posts.actions';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';

export const AdminPosts = ({ allPosts, handleEdit }) => {

  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));

  const classes = useStyles();

  const handleDelete = (post) => {
    dispatch(deletePostAction(post))
  }
  
  return (
    <div className="admin-posts">
      <div className="beauty_posts">
        <h1>BEAUTY POSTS...</h1>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
            {allPosts.map((item) => {
              if(item.catagory === 'beauty') {
                return (
                  <GridListTile key={item.image}>
                    <img src={item.image} alt={item.title} />
                    <GridListTileBar
                      title={item.title}
                      actionIcon={
                        <IconButton aria-label={`star ${item.title}`}>
                          <DeleteIcon onClick={() => handleDelete(item)} className={classes.title} />
                          <EditIcon onClick={() => handleEdit(item)} className={classes.title} />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                )
              }
            }
            )}
          </GridList>
        </div>
      </div>
      <div className="food_posts">
      <h1>FOOD POSTS...</h1>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
            {allPosts.map((item) => {
              if(item.catagory === 'food') {
                return (
                  <GridListTile key={item.image}>
                    <img src={item.image} alt={item.title} />
                    <GridListTileBar
                      title={item.title}
                      actionIcon={
                        <IconButton aria-label={`star ${item.title}`}>
                          <DeleteIcon onClick={() => handleDelete(item)} className={classes.title} />
                          <EditIcon onClick={() => handleEdit(item)} className={classes.title} />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                )
              }
            }
            )}
          </GridList>
        </div>
      </div>

      <div className="life_posts">
        <h1>LIFE POSTS...</h1>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
            {allPosts.map((item) => {
              if(item.catagory === 'life') {
                return (
                  <GridListTile key={item.image}>
                    <img src={item.image} alt={item.title} />
                    <GridListTileBar
                      title={item.title}
                      actionIcon={
                        <IconButton aria-label={`star ${item.title}`}>
                          <DeleteIcon onClick={() => handleDelete(item)} className={classes.title} />
                          <EditIcon onClick={() => handleEdit(item)} className={classes.title} />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                )
              }
            }
            )}
          </GridList>
        </div>
      </div>
      <div className="life_posts">
        <h1>B&S POSTS...</h1>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
            {allPosts.map((item) => {
              if(item.catagory === 'body and soul') {
                return (
                  <GridListTile key={item.image}>
                    <img src={item.image} alt={item.title} />
                    <GridListTileBar
                      title={item.title}
                      actionIcon={
                        <IconButton aria-label={`star ${item.title}`}>
                          <DeleteIcon onClick={() => handleDelete(item)} className={classes.title} />
                          <EditIcon onClick={() => handleEdit(item)} className={classes.title} />
                        </IconButton>
                      }
                    />
                  </GridListTile>
                )
              }
            }
            )}
          </GridList>
        </div>
      </div>
     
    </div>
  )
}