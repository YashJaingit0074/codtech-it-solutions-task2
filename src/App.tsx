import React, { useState } from 'react';
import { Layout, PlusCircle, CheckCircle, XCircle } from 'lucide-react';
import TaskList from './components/TaskList';
import ProjectList from './components/ProjectList';
import AddTaskModal from './components/AddTaskModal';
import AddProjectModal from './components/AddProjectModal';
import { Task, Project } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
    setShowAddTask(false);
  };

  const addProject = (project: Project) => {
    setProjects([...projects, project]);
    setShowAddProject(false);
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <Layout className="mr-2" /> TaskMaster
          </h1>
          <div>
            <button
              onClick={() => setShowAddTask(true)}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg mr-2 flex items-center"
            >
              <PlusCircle className="mr-1" size={18} /> Add Task
            </button>
            <button
              onClick={() => setShowAddProject(true)}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg flex items-center"
            >
              <PlusCircle className="mr-1" size={18} /> Add Project
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Tasks</h2>
            <TaskList
              tasks={tasks}
              onToggleCompletion={toggleTaskCompletion}
              onDeleteTask={deleteTask}
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <ProjectList projects={projects} />
          </div>
        </div>
      </main>

      {showAddTask && (
        <AddTaskModal onAddTask={addTask} onClose={() => setShowAddTask(false)} />
      )}
      {showAddProject && (
        <AddProjectModal onAddProject={addProject} onClose={() => setShowAddProject(false)} />
      )}
    </div>
  );
}

export default App;