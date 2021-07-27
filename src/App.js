// React packages

// Redux

// Styling
import "./App.css";
import "@ionic/react/css/core.css"

// Components
import { TodoList } from "./todo/TodoList";
import { IonApp, IonContent, IonHeader, IonToolbar } from '@ionic/react'

export default function App() {
  
  return (
    <IonApp>

      <IonToolbar className="header toolbar">
        <IonHeader>React App</IonHeader>
      </IonToolbar>

      <IonContent>
        <TodoList></TodoList>
      </IonContent>

    </IonApp>
  );
}
