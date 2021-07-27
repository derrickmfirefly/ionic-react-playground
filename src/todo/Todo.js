// React

// Redux
import { useDispatch } from "react-redux";

// Reducers
import { updateTodo } from "./todoSlice";

// Components
import { 
  IonButton, 
  IonCard, 
  IonCardHeader, 
  IonCardSubtitle,  
  IonLabel,
} from '@ionic/react'

// Style
import './Todo.css'
import "@ionic/react/css/core.css"



export const Todo = ({todo}) => {
  const dispatch = useDispatch();

  const complete = () => {
    dispatch(updateTodo(todo.id));
  };

  return (
    <IonCard className="card">
      <IonLabel>{todo.id}</IonLabel>
      <IonCardHeader>{todo.title}</IonCardHeader>
      <IonCardSubtitle>{todo.isComplete + ''}</IonCardSubtitle>
      <IonButton className="btnComplete" onClick={() => complete()}>
        Complete
      </IonButton>
    </IonCard>
  );
};
