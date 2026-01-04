// BaseNode.js
import { memo } from 'react';
import { Handle } from 'reactflow';

export const BaseNode = memo(
  ({ title, children, handles = [] }) => {
    return (
      <div className="relative w-64 rounded-xl border border-purple-500/40 bg-[#11111f] shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)] transition-all hover:border-purple-400 hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.6)]">
        
        <div className="rounded-t-xl bg-gradient-to-r from-purple-900/50 to-transparent p-3 border-b border-purple-500/20">
             <div className="font-bold text-purple-300 tracking-wide text-sm uppercase">
                {title}
             </div>
        </div>
        <div className="p-4 text-gray-300">
          {children}
        </div>

        {handles.map((handle) => (
          <Handle
            key={handle.id}
            type={handle.type}
            position={handle.position}
            id={handle.id}
            className={`!w-3 !h-3 !bg-purple-400 !border-2 !border-[#11111f] hover:!bg-white transition-colors`}
            style={{ 
                ...handle.style,
                boxShadow: '0 0 10px #a855f7' 
            }}
          />
        ))}
      </div>
    );
  }
);