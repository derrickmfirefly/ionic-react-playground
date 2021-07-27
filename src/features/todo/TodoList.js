// React
import { useState } from 'react'

// Redux
import { useSelector, useDispatch } from "react-redux";

// Reducers
import { addTodo } from './todoSlice'

// Components
import { Todo } from "./Todo";
import { 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonButton,  
  IonHeader,
  IonInput,
} from "@ionic/react";

// Style
import './Todo.css'
import "@ionic/react/css/core.css"

export const TodoList = () => {

  const [newTaskTitle, setNewTaskTitle] = useState(null)

  const todos = useSelector((state) => state.todos.value); // pull our todos from redux store
  const todosCount = useSelector((state) => state.todos.count); // pull count of todos from redux store
  const dispatch = useDispatch();

  const add = () => {
    if (newTaskTitle) {
      const todo = {
        id: todos.length + 1,
        title: newTaskTitle,
        isComplete: false
      }
      dispatch(addTodo(todo))
    } else {
      console.error('No task title')
    }
    setNewTaskTitle(null)
  }

  return (
    <IonGrid>

      <IonHeader>
        Number of Tasks: <strong>{todosCount}</strong>
      </IonHeader>

      <IonInput value={newTaskTitle} onIonChange={e => setNewTaskTitle(e.detail.value)} placeholder="New Task"></IonInput>

      <IonButton onClick={() => add()}>
        Add Todo
      </IonButton>

      <IonRow>
        <IonCol>
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo}> </Todo>;
          })}
        </IonCol>
      </IonRow>
      
    </IonGrid>
  );
};
