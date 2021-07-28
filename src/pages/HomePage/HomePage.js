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

    const theme = useSelector((state) => state.settings.theme)

    return (
        <div>
            <IonToolbar color={theme}>
                <IonTitle>Home</IonTitle>
            </IonToolbar>
        </div>
    )
}
