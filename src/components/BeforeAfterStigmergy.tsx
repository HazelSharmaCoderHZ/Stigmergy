import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, ArrowRight, Activity, Zap, AlertTriangle, Layers, GitCompare } from 'lucide-react';

export const BeforeAfterStigmergy: React.FC = () => {
  const [viewMode, setViewMode] = useState<'split' | 'before' | 'after'>('split');

  return (
    <section id="comparison" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider">
              <GitCompare className="w-3.5 h-3.5" />
              <span>Comparative Performance Benchmark</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500">Decentralized Swarm vs Centralized SCADA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Without Coordination vs. With Stigmergic Coordination
            </h2>
            <p className="text-sm text-slate-600">
              Visualizing the dramatic physical transformation when agents communicate indirectly through grid state signals.
            </p>
          </div>

          {/* View Mode Segmented Controls */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-md border border-slate-200 text-xs font-mono">
            <button
              onClick={() => setViewMode('split')}
              className={`px-3 py-1.5 rounded transition-colors ${
                viewMode === 'split' ? 'bg-white text-slate-900 shadow font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => setViewMode('before')}
              className={`px-3 py-1.5 rounded transition-colors ${
                viewMode === 'before' ? 'bg-white text-red-600 shadow font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Without Stigmergy
            </button>
            <button
              onClick={() => setViewMode('after')}
              className={`px-3 py-1.5 rounded transition-colors ${
                viewMode === 'after' ? 'bg-white text-blue-600 shadow font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              With Stigmergy
            </button>
          </div>
        </div>

        {/* Comparative Cards Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT: WITHOUT STIGMERGY (Centralized / Blind Dispatch) */}
          {(viewMode === 'split' || viewMode === 'before') && (
            <div className="bg-slate-50 p-6 rounded-xl border border-red-200 shadow-sm space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-red-200">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center text-red-700">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Without Stigmergy</h3>
                    <p className="text-[11px] font-mono text-red-600">Centralized SCADA / Blind Feeder Dispatch</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-red-100 text-red-800 rounded border border-red-300">
                  BOTTLENECK HAZARD
                </span>
              </div>

              {/* Visual Grid Schematic: Congested single-trunk routing */}
              <div className="relative bg-slate-900 p-4 rounded-lg border border-slate-800 h-64 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 tech-grid-pattern-dark opacity-30 pointer-events-none" />

                <div className="flex justify-between text-[10px] font-mono text-slate-400 z-10">
                  <span>CENTRAL DISPATCHER LATENCY: 2.8s</span>
                  <span className="text-red-400 font-bold">3 OVERLOADED NODES</span>
                </div>

                {/* SVG Visualizing the congested trunk line */}
                <div className="py-2 z-10 flex items-center justify-center">
                  <svg viewBox="0 0 360 140" className="w-full h-36">
                    {/* Generators on left */}
                    <g transform="translate(40, 40)">
                      <circle r="16" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                      <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace">GEN-A</text>
                    </g>
                    <g transform="translate(40, 100)">
                      <circle r="16" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                      <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace">GEN-B</text>
                    </g>

                    {/* Bottleneck trunk line: Flashing red, heavy stroke */}
                    <line x1="56" y1="40" x2="160" y2="70" stroke="#EF4444" strokeWidth="5" />
                    <line x1="56" y1="100" x2="160" y2="70" stroke="#EF4444" strokeWidth="5" />

                    {/* Central single point of failure */}
                    <g transform="translate(160, 70)">
                      <circle r="22" fill="#7F1D1D" stroke="#EF4444" strokeWidth="3" className="animate-pulse" />
                      <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">CHOKE</text>
                      <text y="36" textAnchor="middle" fill="#EF4444" fontSize="8" fontFamily="monospace">118% Rating</text>
                    </g>

                    {/* Downstream starving load */}
                    <line x1="182" y1="70" x2="290" y2="40" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="182" y1="70" x2="290" y2="100" stroke="#EF4444" strokeWidth="4" />

                    <g transform="translate(290, 40)">
                      <circle r="16" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5" />
                      <text y="4" textAnchor="middle" fill="#94A3B8" fontSize="8" fontFamily="monospace">LOAD-1</text>
                      <text y="28" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="monospace">Starved</text>
                    </g>
                    <g transform="translate(290, 100)">
                      <circle r="18" fill="#450A0A" stroke="#EF4444" strokeWidth="2.5" />
                      <text y="4" textAnchor="middle" fill="#EF4444" fontSize="8" fontFamily="monospace" fontWeight="bold">LOAD-2</text>
                      <text y="30" textAnchor="middle" fill="#EF4444" fontSize="8" fontFamily="monospace">98% Deficit</text>
                    </g>
                  </svg>
                </div>

                <div className="text-[10px] font-mono text-red-300 bg-red-950/80 p-2 rounded border border-red-900/60 z-10 flex items-center justify-between">
                  <span>LINE OVERHEATING: 118% Thermal Limit</span>
                  <span className="font-bold">Trip Risk: SEVERE</span>
                </div>
              </div>

              {/* Physical Symptoms List */}
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✖</span>
                  <span><strong>Cascading Thermal Bottlenecks:</strong> Power attempts to traverse fixed shortest paths regardless of instantaneous line heating.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✖</span>
                  <span><strong>Centralized Communication Lag:</strong> Sensors must transmit telemetry to distant control servers, incurring multi-second decision latency.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✖</span>
                  <span><strong>Zero Self-Healing:</strong> If a substation fails, uncoordinated upstream generators trip offline due to localized overvoltage.</span>
                </li>
              </ul>

              {/* Metrics Benchmark Table */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono pt-2 border-t border-red-200">
                <div className="p-2 bg-white rounded border border-red-200">
                  <span className="text-[10px] text-slate-500 block">Avg Congestion</span>
                  <span className="text-base font-bold text-red-600">28.4%</span>
                </div>
                <div className="p-2 bg-white rounded border border-red-200">
                  <span className="text-[10px] text-slate-500 block">Reaction Time</span>
                  <span className="text-base font-bold text-red-600">2,800 ms</span>
                </div>
                <div className="p-2 bg-white rounded border border-red-200">
                  <span className="text-[10px] text-slate-500 block">Line Losses</span>
                  <span className="text-base font-bold text-red-600">8.2%</span>
                </div>
              </div>

            </div>
          )}

          {/* RIGHT: WITH STIGMERGIC COORDINATION (Decentralized Environmental Multi-Agent) */}
          {(viewMode === 'split' || viewMode === 'after') && (
            <div className="bg-blue-50/60 p-6 rounded-xl border border-blue-200 shadow-sm space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-blue-200">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-700">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">With Stigmergic Coordination</h3>
                    <p className="text-[11px] font-mono text-blue-600">Distributed Multi-Agent Environmental Signaling</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 rounded border border-emerald-300">
                  DYNAMIC EQUILIBRIUM
                </span>
              </div>

              {/* Visual Grid Schematic: Multi-path dispersed routing */}
              <div className="relative bg-slate-900 p-4 rounded-lg border border-slate-800 h-64 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 tech-grid-pattern-dark opacity-30 pointer-events-none" />

                <div className="flex justify-between text-[10px] font-mono text-slate-400 z-10">
                  <span>DISPERSED CORRIDORS: 4 PARALLEL</span>
                  <span className="text-emerald-400 font-bold">0 OVERLOADS</span>
                </div>

                {/* SVG Visualizing multi-path balanced load */}
                <div className="py-2 z-10 flex items-center justify-center">
                  <svg viewBox="0 0 360 140" className="w-full h-36">
                    {/* Generators on left */}
                    <g transform="translate(40, 40)">
                      <circle r="16" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                      <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace">GEN-A</text>
                    </g>
                    <g transform="translate(40, 100)">
                      <circle r="16" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
                      <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace">GEN-B</text>
                    </g>

                    {/* Balanced parallel links */}
                    <line x1="56" y1="40" x2="160" y2="35" stroke="#38BDF8" strokeWidth="2" />
                    <line x1="56" y1="40" x2="160" y2="70" stroke="#38BDF8" strokeWidth="2" />
                    <line x1="56" y1="100" x2="160" y2="70" stroke="#38BDF8" strokeWidth="2" />
                    <line x1="56" y1="100" x2="160" y2="105" stroke="#38BDF8" strokeWidth="2" />

                    {/* Distributed Nodes with Pheromone diffusion */}
                    <g transform="translate(160, 35)">
                      <circle r="14" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
                      <text y="3" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontFamily="monospace">NODE-1</text>
                    </g>
                    <g transform="translate(160, 70)">
                      <circle r="16" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
                      <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace">ROUTER</text>
                    </g>
                    <g transform="translate(160, 105)">
                      <circle r="14" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
                      <text y="3" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontFamily="monospace">NODE-2</text>
                    </g>

                    {/* Moving particles through multiple paths */}
                    <line x1="176" y1="35" x2="290" y2="40" stroke="#38BDF8" strokeWidth="2" />
                    <line x1="176" y1="70" x2="290" y2="70" stroke="#38BDF8" strokeWidth="2" />
                    <line x1="176" y1="105" x2="290" y2="100" stroke="#38BDF8" strokeWidth="2" />

                    <g transform="translate(290, 40)">
                      <circle r="16" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                      <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace">LOAD-1</text>
                      <text y="28" textAnchor="middle" fill="#10B981" fontSize="7" fontFamily="monospace">100% Fed</text>
                    </g>
                    <g transform="translate(290, 100)">
                      <circle r="16" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                      <text y="4" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace">LOAD-2</text>
                      <text y="28" textAnchor="middle" fill="#10B981" fontSize="7" fontFamily="monospace">Stable</text>
                    </g>
                  </svg>
                </div>

                <div className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 p-2 rounded border border-emerald-900/60 z-10 flex items-center justify-between">
                  <span>MAX LINE LOADING: 68% Thermal Limit</span>
                  <span className="font-bold text-emerald-400">Status: OPTIMAL</span>
                </div>
              </div>

              {/* Physical Advantages List */}
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Automatic Swarm Load Dispersion:</strong> Agents sense the congestion pheromone and immediately route power across secondary meshes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Sub-200ms Localized Reactions:</strong> Decisions happen directly at transformer buses without waiting for remote server round-trips.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Immunity to Single Point of Failure:</strong> Even if 3 agents are taken offline, the remaining swarm coordinates through the environment.</span>
                </li>
              </ul>

              {/* Metrics Benchmark Table */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono pt-2 border-t border-blue-200">
                <div className="p-2 bg-white rounded border border-blue-200">
                  <span className="text-[10px] text-slate-500 block">Avg Congestion</span>
                  <span className="text-base font-bold text-emerald-600">3.8%</span>
                </div>
                <div className="p-2 bg-white rounded border border-blue-200">
                  <span className="text-[10px] text-slate-500 block">Reaction Time</span>
                  <span className="text-base font-bold text-emerald-600">140 ms</span>
                </div>
                <div className="p-2 bg-white rounded border border-blue-200">
                  <span className="text-[10px] text-slate-500 block">Line Losses</span>
                  <span className="text-base font-bold text-emerald-600">2.9%</span>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
