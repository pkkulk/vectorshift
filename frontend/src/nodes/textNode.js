
import { useState, useMemo } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './Base';

const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');

  const variables = useMemo(() => {
    const vars = new Set();
    let match;
    while ((match = VARIABLE_REGEX.exec(text)) !== null) {
      vars.add(match[1]);
    }
    return Array.from(vars);
  }, [text]);

  return (
    <BaseNode title="Text" >
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          className={`!w-3 !h-3 !bg-purple-400 !border-2 !border-[#11111f]`}
          style={{
            top: 88 + index * 24, 
            boxShadow: '0 0 10px #a855f7'
          }}
        />
      ))}

      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Text Field:</label>
        <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full resize-none overflow-hidden rounded-lg bg-[#1C2536] border border-gray-700/50 px-3 py-2 text-sm text-white shadow-inner focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
            style={{ minHeight: '80px', height: 'auto' }}
            onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
            }}
        />
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        className={`!w-3 !h-3 !bg-purple-400 !border-2 !border-[#11111f]`}
        style={{ boxShadow: '0 0 10px #a855f7' }}
      />
    </BaseNode>
  );
};