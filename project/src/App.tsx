import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);
  
  const handleTaskAdded = () => {
    // Force a refresh of the task list
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto py-6 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">My Tasks</h2>
          
          <AddTaskForm onTaskAdded={handleTaskAdded} />
          
          <div key={refreshKey}>
            <TaskList />
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          TaskFlow App &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

export default App;