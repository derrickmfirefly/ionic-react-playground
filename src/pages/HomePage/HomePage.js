// React
import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Components
import {    
    IonToolbar,
    IonTitle,
} from '@ionic/react'

export const HomePage = () => {

    const theme = useSelector((state) => state.settings.darkMode)

    return (
        <div>
            <IonToolbar color="dark">
                <IonTitle>Home</IonTitle>
            </IonToolbar>
        </div>
    )
}
