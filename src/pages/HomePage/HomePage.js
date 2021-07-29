// React
import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Components
import {    
    IonToolbar,
    IonTitle,
    IonCard,
    IonContent,
    IonCardHeader,
    IonGrid,
    IonRow,
    IonCol,
    IonCardContent,
} from '@ionic/react'

export const HomePage = () => {

    const theme = useSelector((state) => state.settings.theme)

    return (
        <div>
            <IonToolbar color={theme}>
                <IonTitle>Home</IonTitle>
            </IonToolbar>

            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonCard>
                            <IonCardHeader>
                                <strong>To Do List Feature</strong>
                            </IonCardHeader>
                            <IonCardContent>
                                Navigate to the to do list using the navigation bar.
                                You can add and remove items that you need to do!
                            </IonCardContent>
                        </IonCard>
                        <IonCard>
                            <IonCardHeader>
                                <strong>Theme Feature</strong>
                            </IonCardHeader>
                            <IonCardContent>
                                Navigate to the settings page to change the theme of 
                                components in the app!
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>

        </div>
    )
}
