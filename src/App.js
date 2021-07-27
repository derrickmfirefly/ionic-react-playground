// React packages

// Redux

// Styling
import "./App.css";
import "@ionic/react/css/core.css"

// Components
import { TodoList } from "./features/todo/TodoList";
import { IonApp, IonContent, IonHeader, IonToolbar } from '@ionic/react'

export default function App() {
  
  return (
    <IonApp>

      <IonToolbar className="header toolbar">
        <IonHeader>Ionic React Playground</IonHeader>
      </IonToolbar>

      <IonContent>
        <TodoList></TodoList>
      </IonContent>

    </IonApp>
  );
}
