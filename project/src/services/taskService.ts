import axios from 'axios';

const API_URL = 'https://task-todo-app-w5kb.onrender.com';

export const fetchAllTasks = async (): Promise<string[]> => {
  try {
    const response = await axios.get(`${API_URL}/allTasks`);
    return response.data.tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

