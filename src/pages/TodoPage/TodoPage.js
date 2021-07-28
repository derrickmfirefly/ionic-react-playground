// React
import React from 'react'

// Components
import { TodoList } from '../../features/todo/TodoList'
import {
    IonToolbar,
    IonTitle,
} from '@ionic/react'

export const TodoPage = () => {
    return (
        <div>
            <IonToolbar color="dark">
                <IonTitle>To Do</IonTitle>
            </IonToolbar>
            <TodoList />
        </div>
    )
}
