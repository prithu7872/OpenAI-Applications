export interface TaskStatus {
    Pending: 'Pending';
    InProgress: 'In Progress';
    Done: 'Done';
}
export interface Task {
  id: number;
  title: string;
  description: string;
  status : TaskStatus;
  createdAt: Date;
  updatedAt: Date | undefined ;
  
}

export type ICreateTask = Pick<Task, 'title' | 'description'>;
export type IUpdateTask = Partial<Pick<Task, 'title' | 'description' | 'status'>>; 
