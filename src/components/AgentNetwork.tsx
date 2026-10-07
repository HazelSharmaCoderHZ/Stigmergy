import React from 'react';
import { Agent, GridNode } from '../types/grid';
import { Cpu, Radio, Zap, ArrowRight, ShieldCheck, BatteryCharging, Compass } from 'lucide-react';

interface AgentNetworkProps {
  agents: Agent[];
  nodes: GridNode[];
  onSelectNode: (node: GridNode | null) => void;
}

export const AgentNetwork: React.FC<AgentNetworkProps> = ({
  agents,
  nodes,
  onSelectNode,
}) => {
  const getNodeName = (zoneNodeId: string) => {
    const node = nodes.find((n) => n.id === zoneNodeId);
    return node ? `${node.zoneCode} (${node.name})` : zoneNodeId;
  };

  const getStateBadge = (state: Agent['state']) => {
    switch (state) {
      case 'rerouting':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'discharging':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'signaling':
        return 'bg-cyan-100 text-cyan-800 border-cyan-300';
      case 'balancing':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <section id="agents" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Autonomous Swarm Entities</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500">Decoupled Local Decision Engines</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Active Agent Network Registry
            </h2>
            <p className="text-sm text-slate-600">
              Agents operate independently at physical substation and feeder nodes without interpersonal chat channels. All synchronization is mediated through physical grid states.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 bg-white px-3 py-1.5 rounded border border-slate-200">
            TOTAL ACTIVE ROSTER: <strong className="text-blue-600">{agents.length} AGENTS ONLINE</strong>
          </div>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((agent) => {
            const currentNode = nodes.find((n) => n.id === agent.currentZoneId);

            return (
              <div
                key={agent.id}
                onClick={() => currentNode && onSelectNode(currentNode)}
                className="p-5 bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer space-y-3"
              >
                {/* Header row: ID, Role, State */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-xs">
                      {agent.id}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{agent.name}</h4>
                      <p className="text-[11px] font-mono text-blue-600">{agent.role}</p>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border font-semibold ${getStateBadge(
                      agent.state
                    )}`}
                  >
                    {agent.state}
                  </span>
                </div>

                {/* Local Zone & Sensed Signal */}
                <div className="p-2.5 bg-slate-50 rounded border border-slate-200 space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Current Station:</span>
                    <span className="text-slate-900 font-semibold truncate max-w-[180px]">
                      {getNodeName(agent.currentZoneId)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Sensed Signal:</span>
                    <span className="text-amber-600 font-semibold">
                      {agent.sensedSignal || 'NONE'} ({agent.signalStrength}%)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Adaptation Score:</span>
                    <span className="text-emerald-600 font-bold">{agent.adaptationScore}%</span>
                  </div>
                </div>

                {/* Current Action Invariant */}
                <div className="text-xs text-slate-700 bg-blue-50/50 p-2.5 rounded border border-blue-100">
                  <span className="text-[10px] font-mono text-blue-700 font-semibold block uppercase">
                    Autonomous Dispatch Action:
                  </span>
                  <p className="mt-0.5 text-slate-800 leading-snug">{agent.action}</p>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
                  <span>Previous Zone: {agent.lastZoneVisited}</span>
                  <span className="text-blue-600 flex items-center gap-1">
                    <span>Inspect Node</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
