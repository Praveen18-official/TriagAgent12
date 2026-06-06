import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiBell, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Read login role
  const userType = localStorage.getItem('userType') || 'demo';
  const isDemo = userType === 'demo';

  const getPageTitle = () => {
    const path = location.pathname;
    if (path.startsWith('/dashboard')) return 'Dashboard Overview';
    if (path.startsWith('/upload')) return 'Upload Tickets';
    if (path.startsWith('/processing')) return 'AI Processing Queue';
    if (path.startsWith('/results')) return 'Classified Support Tickets';
    if (path.startsWith('/details') || path.startsWith('/ticket')) return 'Ticket Detailed Analysis';
    if (path.startsWith('/analytics')) return 'Performance Analytics';
    if (path.startsWith('/reports')) return 'Data Reports & Export';
    if (path.startsWith('/settings')) return 'Global Configurations';
    return 'Triage Agent';
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userType');
    navigate('/login');
  };

  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">

      {/* Title */}
      <div>
        <h2 className="text-lg font-bold text-slate-850">
          {getPageTitle()}
        </h2>
        <p className="text-[11px] text-slate-400">
          Support ticket triage analytics engine
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">

        {/* Workspace indicator tag */}
        <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${isDemo
            ? 'bg-blue-50 border-blue-200 text-blue-700'
            : 'bg-emerald-50 border-emerald-200 text-emerald-700'
          }`}>
          {isDemo ? 'Demo Dataset' : 'Clean Slate (New User)'}
        </span>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2.5 rounded-xl hover:bg-slate-100 text-slate-500 relative transition-colors"
          >
            <FiBell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white animate-ping"></span>
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <>
              <div
                className="fixed inset-0 z-20"
                onClick={() => setShowNotifications(false)}
              ></div>
              <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 py-4 z-30 animate-fade-in-down">
                <div className="px-4 pb-2 border-b border-slate-100 flex justify-between items-center">
                  <span className="font-bold text-xs text-slate-800">Notifications</span>
                  <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-semibold">1 New</span>
                </div>
                <div className="divide-y divide-slate-100 max-h-60 overflow-y-auto">
                  <div className="p-4 hover:bg-slate-50 transition-colors cursor-pointer text-left">
                    <p className="text-xs text-slate-800 font-bold">Database loaded!</p>
                    <p className="text-[10px] text-slate-400 mt-1">
                      {isDemo ? '100 sample support tickets seeded.' : 'Clean workspace session initiated.'}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-2.5 p-1 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <div className={`w-8.5 h-8.5 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-sm ${isDemo ? 'bg-blue-600' : 'bg-emerald-600'
              }`}>
              {isDemo ? 'DS' : 'NU'}
            </div>
            <div className="text-left hidden md:block">
              <p className="text-xs font-bold text-slate-800 leading-none">
                {isDemo ? 'Demo Agent' : 'New User'}
              </p>
              <span className="text-[9px] text-slate-400 mt-0.5 block">
                {isDemo ? 'demo@example.com' : 'newuser@example.com'}
              </span>
            </div>
          </button>

          {/* User Dropdown */}
          {showUserMenu && (
            <>
              <div
                className="fixed inset-0 z-20"
                onClick={() => setShowUserMenu(false)}
              ></div>
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-30">
                <div className="px-4 py-2 border-b border-slate-100 text-left">
                  <p className="text-[10px] text-slate-400">Signed in as</p>
                  <p className="text-xs font-bold text-slate-800 truncate">
                    {isDemo ? 'demo@example.com' : 'newuser@example.com'}
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 mt-1 text-xs text-red-600 hover:bg-red-50 flex items-center space-x-2 transition-colors font-semibold"
                >
                  <FiLogOut className="w-3.5 h-3.5" />
                  <span>Log Out</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
