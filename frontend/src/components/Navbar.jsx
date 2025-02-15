import React, { useEffect } from 'react';
import { useUser, UserButton, useClerk } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className='flex justify-between items-center bg-teal-500 text-white py-3 px-2'>
      <div className='text-4xl'>Easy Present</div>
      <div>
        <ul className='flex gap-3 justify-center items-center'>
          <li><Link to={"/"} className='bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-700 hover:cursor-pointer'>Home</Link></li>
          {
            !user && (
              <li><button className='bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-700 hover:cursor-pointer' onClick={() => openSignIn()}>login</button></li>
            )
          }
          {
            user && (
              <>
                <h2 className='font-bold text-center'>Welcome | {user.firstName} {user.lastName}</h2>
                <UserButton />
              </>
            )
          }

        </ul>
      </div>
    </div>
  )
}

export default Header
