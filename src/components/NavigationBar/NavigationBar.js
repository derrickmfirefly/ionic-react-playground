// React
import React from 'react'

// Components
import {
    IonTabs,
    IonRouterOutlet,
    IonTabButton,
    IonTabBar,
    IonLabel,
    IonIcon,
} from '@ionic/react'
import { Route } from 'react-router-dom';

// Icons
import {
    home,
    list,
} from 'ionicons/icons'

// Pages
import { HomePage } from '../../pages/HomePage/HomePage'
import { TodoPage } from '../../pages/TodoPage/TodoPage'

export const NavigationBar = () => {
    return (
        <IonTabs>
            {/* Define Routes for Pages */}
            <IonRouterOutlet>
                <Route path="/home">
                    <HomePage />
                </Route>
                <Route path="/todo">
                    <TodoPage />
                </Route>
            </IonRouterOutlet>
            {/* Tab Bar Buttons */}
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home">
                    <IonIcon icon={home}/>
                </IonTabButton>
                <IonTabButton tab="todo" href="/todo">
                    <IonIcon icon={list}/>
                </IonTabButton>
            </IonTabBar>

        </IonTabs>
    )
}
