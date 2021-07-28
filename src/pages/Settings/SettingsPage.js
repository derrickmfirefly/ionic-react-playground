// React
import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Components
import {    
    IonToolbar,
    IonTitle,
} from '@ionic/react'
import { Settings } from '../../features/settings/Settings'

export const SettingsPage = () => {

    const theme = useSelector((state) => state.settings.theme)

    return (
        <div>
            <IonToolbar color={theme}>
                <IonTitle>Settings</IonTitle>
            </IonToolbar>
            <Settings />
        </div>
    )
}
