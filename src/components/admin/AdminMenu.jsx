import React, { useState } from 'react'
import { Button, Tooltip } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';

export const AdminMenu = ({ setShowCreatePost, showCreatePost, showPosts, setShowPosts, handleClose, anchorEl, handleClick }) => {

  return (
    <div>
      <Tooltip title="Show/Minimize Compose Post">
        <Button variant="secondary" onClick={() => setShowCreatePost(!showCreatePost)}>
          <AddIcon />
        </Button>
      </Tooltip>
      <Tooltip title="Show/Minimize All Posts">
        <Button variant="secondary" onClick={() => setShowPosts(!showPosts)}>
          <VisibilityIcon />
        </Button>
      </Tooltip>
    </div>
  )
}