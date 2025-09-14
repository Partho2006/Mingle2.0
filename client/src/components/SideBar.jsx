import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import { CirclePlus, LogOut } from 'lucide-react';
import { UserButton, useClerk, useUser } from '@clerk/clerk-react';

const SideBar = ({ sidebarOpen, setsidebarOpen }) => {
  const { signOut } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`w-60 xl:w-72 bg-white border-r border-gray-300 flex flex-col justify-between items-center max-sm:absolute top-0 bottom-0 z-20 ${
        sidebarOpen ? 'translate-x-0' : 'max-sm:-translate-x-full'
      } transition-all duration-300 ease-in-out sticky`}
    >
      <div className="">
        {/* Logo only */}
      <Link to="/" className="w-full ">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-30 mx-10 my-4 cursor-pointer"
        />
        <hr className="border-gray-400 mx-auto w-4/5 my-4" />
      </Link>

        {/* Sidebar menu items */}
      <MenuItems setsidebarOpen={setsidebarOpen} />

      {/* Create Post button */}
      <Link
        to="/create-post"
        className="flex items-center justify-center gap-2 py-2 px-4 mx-6 mt-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-800 active:scale-95 transition text-white cursor-pointer"
      >
        <CirclePlus className="w-5 h-5" />
        Create Post
      </Link>
      </div>

      {/* User info & logout */}
      <div className="w-full border-t border-gray-200 p-4 px-8 flex items-center justify-between">
        <div className="flex gap-2 items-center cursor-pointer">
          <UserButton />
          <div>
            <h1 className="text-sm font-medium">{user?.fullName}</h1>
            {/* <p className="text-xs text-gray-400">@{user?.username}</p> */}
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-4 text-gray-400 hover:text-gray-700 transition cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SideBar;
