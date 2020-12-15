import React, { useState } from 'react'
import firebaseApp from '../../firebase'
import { Button, Tooltip } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
export const AdminMenu = ({ setShowCreatePost, showCreatePost, showPosts, setShowPosts }) => {

  return (
    <div>
      <Tooltip title="Log Out/Log In">
        <Button variant="secondary" onClick={()=> firebaseApp.auth().signOut()}>
          <VpnKeyIcon />
        </Button>
      </Tooltip>
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