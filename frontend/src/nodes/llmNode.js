
import { Position } from 'reactflow';
import { BaseNode } from './Base';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: '33%' } },
        { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: '66%' } },
        { type: 'source', position: Position.Right, id: `${id}-response` },
      ]}
    >
      <div className="text-sm text-gray-400">
        <span>This is a LLM node.</span>
      </div>
    </BaseNode>
  );
};