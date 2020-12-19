import React, { useState } from 'react';
import '../../styles/adminPosts.css';
import { deletePostAction } from '../../store/actions/posts.actions';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Button} from '@material-ui/core';

export const AdminPosts = ({ allPosts, handleEdit }) => {
  const [open, setOpen] = useState(false);
  const [ msg, setMsg ] = useState('')

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
    setMsg('Post Deleted!')
    dispatch(deletePostAction(post))
    handleClick()
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  
  return (
    <div className="admin-posts">
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={msg}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
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
                        <IconButton aria-label={`star ${item.title}`} id="actions-btns">
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