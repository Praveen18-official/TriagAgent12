import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiGrid, FiUpload, FiList, FiBarChart2, FiDownload, FiSettings, FiCpu, FiHome } from 'react-icons/fi';

const Sidebar = () => {
  const userType = localStorage.getItem('userType') || 'demo';
  const isDemo = userType === 'demo';

  const menuItems = [
    { name: 'Landing Page', path: '/', icon: <FiHome className="w-4.5 h-4.5" /> },
    { name: 'Dashboard', path: '/dashboard', icon: <FiGrid className="w-4.5 h-4.5" /> },
    { name: 'Upload Tickets', path: '/upload', icon: <FiUpload className="w-4.5 h-4.5" /> },
    { name: 'AI Results', path: '/results', icon: <FiList className="w-4.5 h-4.5" /> },
    { name: 'Analytics', path: '/analytics', icon: <FiBarChart2 className="w-4.5 h-4.5" /> },
    { name: 'Reports', path: '/reports', icon: <FiDownload className="w-4.5 h-4.5" /> },
    { name: 'Settings', path: '/settings', icon: <FiSettings className="w-4.5 h-4.5" /> },
  ];

  return (
    <aside className="w-64 bg-slate-50 text-slate-700 flex flex-col h-screen fixed left-0 top-0 border-r border-slate-200 z-20">

      {/* Brand Logo Link to Landing page */}
      <Link to="/" className="p-6 border-b border-slate-200/80 flex items-center space-x-3 bg-white hover:bg-slate-50 transition-colors">
        <div className="bg-blue-600 p-2.5 rounded-xl text-white shadow-sm flex items-center justify-center">
          <FiCpu className="w-5 h-5 text-white animate-pulse" />
        </div>
        <div className="text-left">
          <h1 className="font-extrabold text-sm text-slate-900 leading-none tracking-tight">TriageAgent</h1>
          <span className="text-[9px] font-bold text-blue-600 tracking-wider">VERSION 1.0</span>
        </div>
      </Link>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2.5 rounded-xl transition-all duration-150 group text-xs font-semibold ${isActive
                ? 'bg-white text-slate-900 border border-slate-200/80 shadow-sm'
                : 'text-slate-550 hover:bg-slate-200/50 hover:text-slate-900'
              }`
            }
          >
            <span className="transition-transform group-hover:scale-105">
              {item.icon}
            </span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Workspace Session info */}
      <div className="p-4 mx-4 my-6 bg-white border border-slate-250/60 rounded-2xl flex flex-col items-center text-center shadow-sm">
        <span className={`text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1 border ${isDemo
            ? 'bg-blue-50 border-blue-100 text-blue-600'
            : 'bg-emerald-50 border-emerald-100 text-emerald-600'
          }`}>
          {isDemo ? 'Demo Mode' : 'Clean Slate'}
        </span>
        <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
          {isDemo
            ? 'Accessing seeded support dataset'
            : 'Accessing local clean session'}
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
