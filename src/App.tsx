import { useState } from 'react';
import './App.css'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const defaultTasks = [
  {
    id: uuidv4(),
    title: 'Essa tarefa é a primeira da lista',
    completed: false
  },
  {
    id: uuidv4(),
    title: 'Essa tarefa é a segunda da lista',
    completed: true
  },
  {
    id: uuidv4(),
    title: 'lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit',
    completed: false,
  }
]

function App() {

  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  const tasksCompleted = tasks.filter(task => task.completed).length;
  const tasksCreated = tasks.length;
  
  function createTask(title: string) {
    const newTask = {
      id: uuidv4(),
      title,
      completed: false
    }
    setTasks((oldTasks) => [...oldTasks, newTask])
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function toggleTaskCompletion(id: string) {
    
    const checkMyTaks = tasks.reduce((acc:Task[], currentTaks:Task) => {
      if(currentTaks.id === id) {
        currentTaks.completed = !currentTaks.completed
      }

      return [...acc, currentTaks];
    }, [] as Task[])

    setTasks(checkMyTaks)
  }

  



  return (
    <>
      <Header></Header>
      <Section
        tasks={tasks}
        tasksCreated={tasksCreated} 
        tasksCompleted={tasksCompleted}      
        createTask={createTask}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      ></Section>
    </>
    
  )
}

export default App
