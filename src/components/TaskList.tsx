import React from 'react';
import { CheckCircle, XCircle, Circle } from 'lucide-react';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onToggleCompletion: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleCompletion, onDeleteTask }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex items-center justify-between p-3 rounded-lg ${
            task.completed ? 'bg-green-100' : 'bg-white'
          }`}
        >
          <div className="flex items-center">
            <button onClick={() => onToggleCompletion(task.id)} className="mr-2">
              {task.completed ? (
                <CheckCircle className="text-green-500" />
              ) : (
                <Circle className="text-gray-400" />
              )}
            </button>
            <span className={task.completed ? 'line-through text-gray-500' : ''}>
              {task.title}
            </span>
          </div>
          <button onClick={() => onDeleteTask(task.id)} className="text-red-500">
            <XCircle />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;