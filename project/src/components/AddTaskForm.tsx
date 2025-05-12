import React, { useState } from "react";
import { Plus, Flag } from "lucide-react";
import { addTask } from "../services/mqtt";
import { TaskFormData } from "../types/Task";

interface AddTaskFormProps {
  onTaskAdded?: () => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Task title cannot be empty");
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      await addTask(title);

      // Reset form
      setTitle("");

      // Notify parent
      if (onTaskAdded) {
        onTaskAdded();
      }
    } catch (err) {
      setError("Failed to add task. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6 transition-all">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Add a new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-grow p-2 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="ml-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50"
          >
            <Plus size={20} />
          </button>
        </div>

        {error && <div className="mt-2 text-red-600 text-sm">{error}</div>}
      </form>
    </div>
  );
};

export default AddTaskForm;
