import React from 'react'
import assets from '../assets/assets'

function LoginPage() {
  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly
    mx-sm:flex-col backdrop-blur-2xl'>

      {/* ----------Left------------ */}
      <img src={assets.logo_big} alt="" className='w-[min(30vw,250px)]'/>

      {/* ----------right------------ */}

      <form className=''>

      </form>
    </div>
  )
}

export default LoginPage