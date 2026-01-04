// InputNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './Base';

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.inputName || 'input');
  const [type, setType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      title="Input"
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-value` },
      ]}
    >
      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-xs font-medium text-gray-400 uppercase tracking-wider">
          Name:
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg bg-[#1C2536] border border-gray-700/50 px-3 py-2 text-sm text-white shadow-inner focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all" 
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
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};