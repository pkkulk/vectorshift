// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
        className={`
            cursor-grab min-w-[80px] h-[40px] flex items-center justify-center 
            rounded-xl bg-[#1C2536] border 
            font-medium text-sm transition-all duration-200 
            hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] 
            active:cursor-grabbing
            ${type === 'customInput' || type === 'text' 
                ? 'border-blue-500/50 text-blue-300 hover:border-blue-400 hover:text-blue-200' 
                : 'border-purple-500/50 text-purple-300 hover:border-purple-400 hover:text-purple-200'}
        `}
      >
        {label}
      </div>
    );
};