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
    IonSelect,
    IonSelectOption,
} from '@ionic/react'

export const Settings = () => {

    const dispatch = useDispatch()
    const settings = useSelector((state) => state.settings)

    return (
        <div>   
            <IonItem>
                <IonLabel>Theme: {settings.theme}</IonLabel>
                <IonSelect
                    interface="popover"
                    value={settings.theme}
                    onIonChange={(e) => dispatch(setTheme(e.detail.value))}
                >
                    <IonSelectOption>Dark</IonSelectOption>
                    <IonSelectOption>Light</IonSelectOption>
                </IonSelect>
            </IonItem>
        </div>
    )
}
