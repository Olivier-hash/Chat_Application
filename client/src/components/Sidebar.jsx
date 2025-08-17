import React from 'react'
import assets from '../assets/assets'
function Sidebar({selectedUser, setSelectedUser}) {
  return (
    <div>
      <div className='pb-5'>
        <div className='flex justify-between items-center'>
           <img src={assets.logo} alt="Logo" className='max-w-40 '/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar