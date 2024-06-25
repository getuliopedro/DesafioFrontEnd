import React from 'react';
import './styles.css';

interface ITask {
  id: number;
  nameTask: string;
}

interface TodoTaskProps {
  task: ITask;
  deleteTask: (taskId: number) => void;
}

function TodoTask({ task, deleteTask }: TodoTaskProps) {
  return (
    <div className="card">
      <div>
        <p>{task.nameTask}</p>
      </div>

      <div className="line2">
        <span className="btn-card" onClick={() => deleteTask(task.id)}>X</span>
      </div>
    </div>
  );
}

export default TodoTask;
