// React
import React from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Reducers
import { setTheme } from './settingsSlice'

// Components
import {
    IonItem,
    IonToggle,
    IonLabel,
} from '@ionic/react'

export const Settings = () => {

    const dispatch = useDispatch()
    const settings = useSelector((state) => state.settings)

    return (
        <div>   
            <IonItem>
                <IonToggle></IonToggle>
                <IonLabel>Dark Mode</IonLabel>
            </IonItem>
        </div>
    )
}
