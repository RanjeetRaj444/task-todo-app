import axios from 'axios';
import { Task, } from '../types/Task';

const API_URL = 'http://localhost:3001';

export const fetchAllTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get(`${API_URL}/allTasks`);
    return response.data.tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

