/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Layout, Image as ImageIcon, Code2, Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0502] text-white font-sans selection:bg-[#FF4E00] selection:text-white overflow-hidden relative">
      {/* Immersive Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#3a1510] rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#FF4E00] rounded-full blur-[140px] opacity-30"></div>
        <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-[#6322b5] rounded-full blur-[160px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col min-h-screen">
        {/* Navigation Header */}
        <nav className="flex justify-between items-center px-10 py-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-tr from-[#FF4E00] to-[#FF8A00] rounded-lg shadow-[0_0_15px_rgba(255,78,0,0.4)]"></div>
            <span className="text-xl font-bold tracking-tight uppercase">AETHER</span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] tracking-[0.2em] font-medium text-white/50">
            <span className="text-white border-b border-[#FF4E00] pb-1">OVERVIEW</span>
            <span className="hover:text-white transition-colors cursor-pointer">COMPONENTS</span>
            <span className="hover:text-white transition-colors cursor-pointer">DOCUMENTATION</span>
            <span className="hover:text-white transition-colors cursor-pointer">SETTINGS</span>
          </div>
          <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 px-10 items-center py-12"
        >
          {/* Main Content Area */}
          <header className="col-span-1 md:col-span-4 space-y-8">
            <div className="space-y-2">
              <p className="text-[10px] tracking-[0.3em] text-[#FF4E00] font-bold uppercase flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                <span>Protocol: Active</span>
              </p>
              <h1 className="text-6xl lg:text-8xl font-light leading-none tracking-tighter">
                Solar<br /><span className="text-white/90">Winds</span>
              </h1>
              <p className="text-lg text-white/40 italic mt-6 font-serif">
                System ready for construction.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] mb-1">Status</p>
                  <p className="text-sm text-white/80">Pending Design Manifest</p>
                </div>
                <div className="w-2 h-2 bg-[#FF4E00] rounded-full animate-pulse shadow-[0_0_8px_#FF4E00]"></div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/20">Execution Steps</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 group">
                    <div className="w-1 h-8 bg-[#FF4E00] transition-all group-hover:h-10"></div>
                    <div>
                      <p className="text-[9px] text-white/40 uppercase tracking-widest mb-0.5">Asset Required</p>
                      <p className="text-sm font-medium text-white/90">Upload UI Screenshots</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-1 h-8 bg-white/10 transition-all group-hover:bg-white/30"></div>
                    <div>
                      <p className="text-[9px] text-white/40 uppercase tracking-widest mb-0.5">Logical Sync</p>
                      <p className="text-sm font-medium text-white/60">Define Functionality</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          {/* Visual Showcase Area */}
          <div className="col-span-1 md:col-span-5 flex justify-center items-center relative">
            <div className="relative group">
              <div className="absolute -inset-12 bg-[#FF4E00] rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="w-[340px] h-[460px] lg:w-[400px] lg:h-[540px] bg-[#1a1a1a]/40 rounded-[48px] overflow-hidden border border-white/20 shadow-2xl relative z-10 backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4E00]/10 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-24 h-24 text-white/5 mb-8"
                  >
                    <Layout className="w-full h-full" />
                  </motion.div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-light">
                    Waiting for Interface Injection
                  </p>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <div className="w-full h-1 bg-white/5 rounded-full mb-3 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "35%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-[#FF4E00] to-[#FF8A00]" 
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[9px] text-white/30 font-mono tracking-tighter italic">BUILD_VERSION_01.8.2</p>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-[#FF4E00] rounded-full"></div>
                      <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                      <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Analysis Area */}
          <aside className="col-span-1 md:col-span-3 space-y-10 pl-0 md:pl-6">
            <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Code2 className="w-12 h-12" />
              </div>
              <p className="text-[9px] text-[#FF4E00] uppercase tracking-[0.3em] font-bold mb-6">System Analysis</p>
              <div className="space-y-4">
                <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-white/40"></div>
                </div>
                <div className="flex justify-between text-[10px] font-mono text-white/40">
                  <span>FRAMEWORK_SYNC</span>
                  <span>67%</span>
                </div>
              </div>
              <div className="mt-8 flex items-end gap-1.5 h-16">
                {[20, 60, 40, 95, 70, 30, 50, 25, 80, 45, 65, 35].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className={`flex-1 rounded-full ${height > 90 ? 'bg-[#FF4E00]' : 'bg-white/20'}`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4 opacity-50 px-4">
               <p className="text-[9px] uppercase tracking-widest font-bold">Protocol Details</p>
               <p className="text-xs leading-relaxed font-light">
                 Awaiting structural data to initialize the visual layer. Connect your source manifest to proceed with injection.
               </p>
            </div>
          </aside>
        </motion.div>

        {/* Immersive Footer */}
        <footer className="px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-white/20 tracking-[0.3em] font-light uppercase border-t border-white/5">
          <div className="flex items-center gap-4">
            <span className="text-[#FF4E00]/40 font-bold italic">Session 14.8.2 // Protocol Active</span>
            <div className="w-1 h-3 bg-white/5"></div>
            <span>Built for AI Studio</span>
          </div>
          <div className="flex gap-10">
            <span className="text-white/40 hover:text-white transition-colors cursor-pointer">Sync Engine 1.0</span>
            <span>Est. 2026</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

