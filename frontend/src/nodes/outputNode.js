
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './Base';

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.outputName || 'output');
  const [type, setType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      title="Output"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-value` },
      ]}
    >
      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-xs font-medium text-gray-400 uppercase tracking-wider">
          Name:
          <input 
            className="w-full rounded-lg bg-[#1C2536] border border-gray-700/50 px-3 py-2 text-sm text-white shadow-inner focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </label>

        <label className="flex flex-col gap-1 text-xs font-medium text-gray-400 uppercase tracking-wider">
          Type:
          <select 
            className="w-full rounded-lg bg-[#1C2536] border border-gray-700/50 px-3 py-2 text-sm text-white shadow-inner focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none appearance-none"
            value={type} 
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};