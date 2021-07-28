// React

// Redux
import { useDispatch, useSelector } from "react-redux";

// Reducers
import { removeTodo, updateTodo } from "./todoSlice";

// Components
import { 
  IonButton, 
  IonCard, 
  IonCardSubtitle,  
  IonLabel,
  IonCardHeader,
} from '@ionic/react'

// Style
import './Todo.css'
import "@ionic/react/css/core.css"



export const Todo = ({todo}) => {

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme)

  const complete = () => {
    dispatch(updateTodo(todo.id));
  };

  const remove = () => {
    dispatch(removeTodo(todo.id))
  }

  return (
    <IonCard color={theme} className="card">

      <IonLabel>ID: {todo.id}</IonLabel>

      <IonCardHeader className="card-text">{todo.title}</IonCardHeader>

      <IonCardSubtitle>{todo.isComplete + ''}</IonCardSubtitle>

      <IonButton 
        className="btnComplete"
        color={todo.isComplete ? "danger" : "success"} 
        onClick={() => complete()}
      >
        {todo.isComplete ? ' Mark Incomplete' : 'Mark Complete'}
      </IonButton>

      {todo.isComplete ? 
        <IonButton onClick={() => remove()}>
          Remove Todo
        </IonButton> : null
      }

    </IonCard>
  );
};
