// React

// Redux
import { useSelector, useDispatch } from "react-redux";

// Reducers
import { addTodo, removeTodo } from './todoSlice'

// Components
import { Todo } from "./Todo";
import { 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonButton,  
  IonHeader,
} from "@ionic/react";

// Style
import './Todo.css'
import "@ionic/react/css/core.css"

export const TodoList = () => {

  const todos = useSelector((state) => state.todos.value); // pull our todos from redux store
  const todosCount = useSelector((state) => state.todos.count); // pull count of todos from redux store
  const dispatch = useDispatch();

  const add = () => {
    const todo = {
      id: todos.length + 1,
      title: "Task " + (todos.length + 1),
      isComplete: false
    }
    dispatch(addTodo(todo))
  }

  const remove = () => {
    dispatch(removeTodo(1))
  }

  return (
    <IonGrid>

      <IonHeader>
        Number of Tasks: <strong>{todosCount}</strong>
      </IonHeader>

      <IonButton onClick={() => add()}>
        Add Todo
      </IonButton>

      <IonButton onClick={() => remove()}>
        Remove Todo
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
