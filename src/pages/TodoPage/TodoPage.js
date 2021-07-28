// React
import React from 'react'

// Components
import { TodoList } from '../../features/todo/TodoList'
import {
    IonToolbar,
    IonTitle,
} from '@ionic/react'
import { useSelector } from 'react-redux'

export const TodoPage = () => {

    const theme = useSelector((state) => state.settings.theme)

    return (
        <div>
            <IonToolbar color={theme}>
                <IonTitle>To Do</IonTitle>
            </IonToolbar>
            <TodoList />
        </div>
    )
}
