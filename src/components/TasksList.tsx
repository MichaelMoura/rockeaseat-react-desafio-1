import styles from "./TasksList.module.css";
import { Check, Trash } from "phosphor-react";
import clipBoard from "../assets/clipboard.svg";
import { Task } from "../App";

interface TaskslistProps {
    tasks: Task[];
    onDeleteTask: (id: string) => void;
    onToggleTaskCompletion: (id: string) => void;
}

export function TasksList({onDeleteTask, onToggleTaskCompletion, tasks}:TaskslistProps) {

    const hasTasks = tasks.length > 0;

    if(hasTasks){
        return (
            <div className={styles.tasksList}>
                {tasks.map(task => (
                    <div key={task.id} className={styles.task}>
                        <div className={styles.taskState} aria-checked={task.completed} onClick={() => onToggleTaskCompletion(task.id)}>
                            <Check size={12} className={styles.check} />
                        </div>
                        <p>{task.title}</p>
                        <Trash size={18} onClick={()=>onDeleteTask(task.id)}/>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className={styles.noTasks}>
            <img alt="clipboard" src={clipBoard}/>
            <h6>Você ainda não tem tarefas cadastradas</h6>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}