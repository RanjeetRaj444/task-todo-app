import React from "react";

interface TaskCardProps {
  task: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 transition-all hover:shadow-lg">
      <div className="flex justify-between items-start mb-2">
        <h3 className={`text-lg font-semibold `}>{task}</h3>
      </div>
    </div>
  );
};

export default TaskCard;
