import styles from './Section.module.css'
import { Task } from '../App'
import { NewTask } from './NewTask';
import { TasksInfos } from './TasksInfos';
import { TasksList } from './TasksList';

interface sectionProps {
    tasks: Task[];
    tasksCompleted: number;
    tasksCreated: number;
    createTask: (title: string) => void;
    deleteTask: (id: string) => void;
    toggleTaskCompletion: (id: string) => void;
}

export function Section({ 
    createTask, 
    deleteTask, 
    toggleTaskCompletion, 
    tasks, 
    tasksCompleted, 
    tasksCreated 
}: sectionProps){
   
    
    

    return (
        <main className={styles.wrapper}>
            <NewTask createTask={createTask}/>
            <section className={styles.tasksWrapper}>
                <TasksInfos tasksCompleted={tasksCompleted} tasksCreated={tasksCreated}/>
                <TasksList tasks={tasks} onDeleteTask={deleteTask} onToggleTaskCompletion={toggleTaskCompletion} />
                    
            </section>
        </main>
    )
}