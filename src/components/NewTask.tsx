import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import styles from './NewTask.module.css';


interface NewTaskProps {
    createTask: (title: string) => void;
}

export function NewTask({createTask }: NewTaskProps) {
    const [newTask, setNewTask] = useState('');

    function setNewTaskValue(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }

    function handleCreateTask() {
        createTask(newTask);
        setNewTask('');
    }

    const buttonTitle = newTask.length > 0 ? "Clique aqui para adicionar uma nova tarefa" : "Digite uma nova terafa";
    const disableButton = newTask.length === 0;

    return (
        <header className={styles.taskContainer}>
            <input value={newTask} onChange={setNewTaskValue} name="task" placeholder='Adicione uma nova tarefa'></input>
            <button 
                title={buttonTitle}
                disabled={disableButton}
                onClick={handleCreateTask}
                >
                Criar
                <PlusCircle size={14} />
            </button>
        </header>
    )
}