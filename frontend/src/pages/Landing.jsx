import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCpu, FiBarChart2, FiArrowRight, FiDatabase, FiLayers, FiShield, FiFileText, FiActivity, FiArrowUpRight } from 'react-icons/fi';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    { title: 'Smart Classification', desc: 'Categorizes tickets automatically into Bug, Billing, Feature, or Other templates.', icon: <FiLayers className="w-5 h-5 text-blue-600" />, bg: 'bg-blue-50' },
    { title: 'Priority Detection', desc: 'Detects urgency and maps tickets from P1 Critical down to P4 Low.', icon: <FiShield className="w-5 h-5 text-emerald-600" />, bg: 'bg-emerald-50' },
    { title: 'AI Reasoning Logs', desc: 'Generates detailed context explanation rationales for every single ticket.', icon: <FiCpu className="w-5 h-5 text-purple-600" />, bg: 'bg-purple-50' },
    { title: 'Interactive Analytics', desc: 'Visualizes tickets distribution using modern Recharts timelines and spreadsheets.', icon: <FiBarChart2 className="w-5 h-5 text-pink-600" />, bg: 'bg-pink-50' },
    { title: 'SQLite Database Storage', desc: 'Saves and retrieves historical tickets securely in a local relational database.', icon: <FiDatabase className="w-5 h-5 text-indigo-600" />, bg: 'bg-indigo-50' },
    { title: 'Excel & Data Exports', desc: 'Download filtered tickets, analytics summaries, or full database snapshots in one click.', icon: <FiFileText className="w-5 h-5 text-amber-600" />, bg: 'bg-amber-50' },
  ];

  const steps = [
    { step: '01', title: 'Upload Files', desc: 'Upload JSON files and preview the un-triaged records in a table.' },
    { step: '02', title: 'AI Agent Triage', desc: 'Watch a live WebSocket process that classifies tickets one by one.' },
    { step: '03', title: 'Inspect & Adjust', desc: 'Review reasoning, confidence logs, and override parameters if needed.' },
    { step: '04', title: 'Export Reports', desc: 'Analyze aggregates, print metrics, and export data logs to Excel.' },
  ];

  const team = [
    { name: 'Praveen Kumar', role: 'Full Stack & AI Architect', initial: 'PK' },
    { name: 'Aditya Raj', role: 'Lead UI/UX Developer', initial: 'AR' },
    { name: 'Sneha Sharma', role: 'Systems QA Engineer', initial: 'SS' }
  ];

  const handleStart = (userType) => {
    localStorage.setItem('userType', userType);
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen selection:bg-blue-100 selection:text-blue-700">
      
      {/* Premium Thin Top Border */}
      <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600"></div>

      {/* Header Bar */}
      <header className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center border-b border-slate-200 bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2.5 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-500/10">
            <FiCpu className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-slate-900 block leading-none">TriageAgent</span>
            <span className="text-[10px] font-semibold text-blue-600 tracking-wider">SUPPORT AI PLATFORM</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/login')} 
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-all"
          >
            Sign In
          </button>
          <button 
            onClick={() => handleStart('demo')} 
            className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center space-x-1.5"
          >
            <span>Launch App</span>
            <FiArrowUpRight />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-16 pb-20 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-sm mb-6"
        >
          <span className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></span>
          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Version 1.0 Live Demo</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.1]"
        >
          Automate Support Ticket Classifications Using AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          An enterprise-grade triage platform that reads customer requests, detects priority, explains classifications, and organizes workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <button
            onClick={() => handleStart('demo')}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/10 flex items-center justify-center space-x-2 hover:translate-x-0.5"
          >
            <span>Demo Account (100 Seeded Tickets)</span>
            <FiArrowRight className="w-4.5 h-4.5" />
          </button>
          <button
            onClick={() => handleStart('new')}
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-8 py-4 rounded-2xl font-bold transition-all shadow-sm"
          >
            New User (Start Clean Slate)
          </button>
        </motion.div>
      </section>

      {/* High Fidelity Screen Interface Preview */}
      <section className="max-w-5xl mx-auto px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl relative overflow-hidden"
        >
          {/* Header layout */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-red-400 rounded-full"></span>
              <span className="w-3 h-3 bg-amber-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            </div>
            <div className="text-[10px] font-mono text-slate-400 bg-slate-50 px-3 py-1 rounded-lg border border-slate-200/60">
              http://triageagent.local/dashboard
            </div>
            <div className="w-6"></div>
          </div>

          {/* Dummy KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="border border-slate-100 bg-slate-50/50 p-4 rounded-2xl text-left">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Total Open Queue</span>
              <span className="text-xl font-extrabold text-slate-900 mt-1 block">100 Tickets</span>
            </div>
            <div className="border border-slate-100 bg-slate-50/50 p-4 rounded-2xl text-left">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Urgent SLA Blockers</span>
              <span className="text-xl font-extrabold text-red-500 mt-1 block">8 Tickets</span>
            </div>
            <div className="border border-slate-100 bg-slate-50/50 p-4 rounded-2xl text-left">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Average AI Accuracy</span>
              <span className="text-xl font-extrabold text-blue-600 mt-1 block">94.8% Score</span>
            </div>
          </div>

          {/* Dummy Table Preview */}
          <div className="border border-slate-100 rounded-2xl overflow-hidden text-left text-xs text-slate-500">
            <div className="bg-slate-50 p-3 font-bold border-b border-slate-100 grid grid-cols-5">
              <span>Ticket ID</span>
              <span className="col-span-2">Issue Description</span>
              <span>Category</span>
              <span>Priority</span>
            </div>
            <div className="p-3 border-b border-slate-50 grid grid-cols-5 items-center">
              <span className="font-mono text-slate-400">TC-8291</span>
              <span className="col-span-2 font-bold text-slate-800 truncate">Double charged on renewal checkout...</span>
              <span><span className="bg-amber-50 border border-amber-200 text-amber-700 px-2 py-0.5 rounded-full text-[10px] font-bold">Billing</span></span>
              <span><span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-[9px] font-bold">P1 Critical</span></span>
            </div>
            <div className="p-3 grid grid-cols-5 items-center">
              <span className="font-mono text-slate-400">TC-4821</span>
              <span className="col-span-2 font-bold text-slate-800 truncate">App crashes on timeline chart rendering...</span>
              <span><span className="bg-red-50 border border-red-200 text-red-700 px-2 py-0.5 rounded-full text-[10px] font-bold">Bug</span></span>
              <span><span className="bg-orange-500 text-white px-2 py-0.5 rounded-full text-[9px] font-bold">P2 High</span></span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Platform Workflow Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 border-t border-slate-200 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">System Workflow Pipelines</h2>
          <p className="text-slate-500 mt-2 text-sm max-w-lg mx-auto">
            From customer submission to operational resolution, everything runs within a transparent automation grid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl relative overflow-hidden text-left">
              <span className="text-3xl font-black text-slate-200 absolute -top-0 right-4 select-none">
                {s.step}
              </span>
              <h3 className="font-bold text-slate-800 text-base mt-2">{s.title}</h3>
              <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-8 py-20 border-t border-slate-200">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Core Platform Capabilities</h2>
          <p className="text-slate-500 mt-2 text-sm max-w-lg mx-auto">
            Equipped with modern natural language processing pipelines and database systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 p-8 rounded-3xl flex flex-col space-y-4 hover:border-slate-350 transition-all text-left shadow-sm"
            >
              <div className={`${f.bg} p-3 rounded-2xl w-fit border border-slate-200/10`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-lg">{f.title}</h3>
              <p className="text-xs text-slate-550 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 border-t border-slate-200 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Project Development Team</h2>
          <p className="text-slate-500 mt-2 text-sm max-w-lg mx-auto">
            Built by a dedicated engineering squad for placement drive evaluations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-center space-x-4 text-left">
              <div className="w-10 h-10 bg-blue-100 border border-blue-200 text-blue-600 font-extrabold rounded-xl flex items-center justify-center text-sm">
                {member.initial}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{member.name}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50/50 py-10 text-slate-500 text-xs text-center">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <span className="font-bold text-slate-700">TriageAgent Platform</span>
          <div className="flex space-x-6">
            <a href="#github" className="hover:text-slate-850">GitHub</a>
            <a href="#contact" className="hover:text-slate-850">Contact Us</a>
            <a href="#docs" className="hover:text-slate-850">API Docs</a>
          </div>
          <p className="text-[11px] text-slate-400">&copy; 2026 TriageAgent Platform. Placement evaluation.</p>
        </div>
      </footer>

    </div>
  );
};

export default Landing;
