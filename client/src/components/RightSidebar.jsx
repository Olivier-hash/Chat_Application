import React from 'react'
import assets from '../assets/assets'

function RightSidebar({selectedUser}) { // destructurung selected user from the props 
  return selectedUser && (
    <div>
      <div>
        <img src={selectedUser?.profilePic || assets.avatar_icon} alt="" />
      </div>
    </div>
  )
}

export default RightSidebar