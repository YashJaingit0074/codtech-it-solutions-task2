import React from 'react';
import { Folder } from 'lucide-react';
import { Project } from '../types';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <ul className="space-y-2">
      {projects.map((project) => (
        <li key={project.id} className="flex items-center p-3 bg-white rounded-lg">
          <Folder className="mr-2 text-blue-500" />
          <div>
            <h3 className="font-semibold">{project.name}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;