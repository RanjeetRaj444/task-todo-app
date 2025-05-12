import React, { useEffect, useState } from "react";
import { fetchAllTasks } from "../services/taskService";
import TaskCard from "./TaskCard";
import { Loader } from "lucide-react";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await fetchAllTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError("Failed to load tasks. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
    const interval = setInterval(loadTasks, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading && tasks.length === 0) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader className="animate-spin text-blue-500 mr-2" size={24} />
        <span>Loading tasks...</span>
      </div>
    );
  }

  if (error && tasks.length === 0) {
    return (
      <div className="bg-red-50 text-red-800 p-4 rounded-lg">
        <p>{error}</p>
        <button
          onClick={loadTasks}
          className="mt-2 text-sm font-medium text-red-600 hover:text-red-800"
        >
          Try again
        </button>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="bg-gray-50 p-6 rounded-lg text-center">
        <p className="text-gray-600">No tasks yet. Add your first task!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 min-w-100">
      {tasks.length > 0 &&
        tasks.map((task, ind) => <TaskCard key={ind} task={task} />)}
    </div>
  );
};

export default TaskList;
