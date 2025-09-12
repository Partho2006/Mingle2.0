import React from 'react'
import { assets } from '../assets/assets'
import { Star } from 'lucide-react'
import { SignIn } from '@clerk/clerk-react'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* Bg */}
      <img src={assets.bgImage} alt="Background" className='absolute top-0 left-0 w-full h-full object-cover -z-1' />

      {/* left side */}
      <div className="flex-1 flex flex-col items-start justify-between p-8 lg:pl-40">
        <img src={assets.logo} alt="Logo" className='h-16 object-contain' />
        <div>
          <img src={assets.group_users} alt="group" className='h-8 md:h-16' />
          <div>
            <div className='flex gap-1'>
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className='size-4 md:size-5 text-transparent fill-amber-500 flex' />
              ))}
            </div>
            <p>Used by 2k+ users..</p>
          </div>
        </div>
        <h1 className='text-3xl md:text-6xl md:pb-4 font-bold bg-gradient-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent'>
          More than just friends truly connect
        </h1>
        <p className='text-xl md:text-3xl text-indigo-900 mask-x-to-yellow-700 md:max-w-md gap-1'>
          Connect with people Globally on Mingle.
        </p>
        <span className='md:h-8'></span>
      </div>
      {/* right side */}
      <div className="flex-1 flex items-center justify-center p-8 sm:p-10">
        <SignIn />
      </div>
    </div>
  )
}

export default Login
