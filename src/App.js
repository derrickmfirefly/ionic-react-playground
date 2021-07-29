// React packages

// Redux

// Styling
import "./App.css";
import "@ionic/react/css/core.css"

// Components
import { TodoList } from "./features/todo/TodoList";
import { 
  IonApp, 
  IonToolbar,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router';
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { HomePage } from './pages/HomePage/HomePage'

export default function App() {
  
  return (
    <IonApp>
      <IonReactRouter>
        <NavigationBar />
      </IonReactRouter>
    </IonApp>
  );
}
