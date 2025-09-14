import React from 'react'
import { menuItemsData } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const MenuItems = ({setsidebarOpen}) => {
    return (
        <div className='px-8 text-gray-600 space-y-1 font-medium'>
            {
                menuItemsData.map(({to, label, Icon}) => (
                    <NavLink key={to} to={to} end={to === '/'} onClick={() => setsidebarOpen(false)} className={({ isActive }) => `px-4 py-2 flex items-center gap-4 rounded-xl ${isActive ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-200'}`}>
                        <Icon className='w-5 h-5' />
                        {label}
                    </NavLink>
                ))
            }
        </div>
    )
}

export default MenuItems
