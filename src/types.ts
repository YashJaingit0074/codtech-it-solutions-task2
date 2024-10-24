export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  projectId?: string;
  dueDate?: Date;
}

export interface Project {
  id: string;
  name: string;
  description: string;
}