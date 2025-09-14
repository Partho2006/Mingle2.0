import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Loading from '../components/Loading';
import { useUser } from '@clerk/clerk-react';

const Layout = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <Loading />;
  if (!user) return <Loading />; // or redirect to login

  return (
    <div className="w-full flex h-screen">
      <SideBar sidebarOpen={sidebarOpen} setsidebarOpen={setsidebarOpen} />

      <div className="flex-1 bg-slate-100">
        <Outlet />
      </div>

      {sidebarOpen ? (
        <X
          className="absolute top-2 right-2 p-2 z-50 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden"
          onClick={() => setsidebarOpen(false)}
        />
      ) : (
        <Menu
          className="absolute top-2 right-2 p-2 z-50 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden"
          onClick={() => setsidebarOpen(true)}
        />
      )}
    </div>
  );
};

export default Layout;
