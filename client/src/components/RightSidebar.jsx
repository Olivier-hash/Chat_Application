import React from 'react'
import assets from '../assets/assets'

function RightSidebar({selectedUser}) { // destructurung selected user from the props 
  return selectedUser && (
    <div>
      <div>
        <img src={selectedUser?.profilePic || assets.avatar_icon} alt=""
        className='w-20 aspect-[1/1] rounded-full' />
        <h1>{selectedUser.fullName}</h1>
      </div>
    </div>
  )
}

export default RightSidebar