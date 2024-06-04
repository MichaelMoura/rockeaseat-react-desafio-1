import styles from './TasksInfos.module.css';

interface tasksInfosProps {
    tasksCreated: number;
    tasksCompleted: number;
}

export function TasksInfos({ tasksCreated, tasksCompleted}: tasksInfosProps) {
    return (
        <div className={styles.tasksInfos}>
            <div className={styles.tasksCreated}>
                <h6>Tarefas Criadas</h6>
                <span>{tasksCreated}</span>
            </div>
            <div className={styles.tasksFinished}>
                <h6>Concluídas</h6>
                <span>{tasksCompleted} de {tasksCreated}</span>
            </div>
        </div>
    )
}