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
    settings,
} from 'ionicons/icons'

// Pages
import { HomePage } from '../../pages/HomePage/HomePage'
import { TodoPage } from '../../pages/TodoPage/TodoPage'
import { SettingsPage } from '../../pages/Settings/SettingsPage';
import { useSelector } from 'react-redux';

export const NavigationBar = () => {

    const theme = useSelector((state) => state.settings.theme)

    return (
        <IonTabs>
            {/* Define Routes for Pages */}
            <IonRouterOutlet>
                <Route>
                    <HomePage />
                </Route>
                <Route path="/home">
                    <HomePage />
                </Route>
                <Route path="/todo">
                    <TodoPage />
                </Route>
                <Route path="/settings">
                    <SettingsPage />
                </Route>
            </IonRouterOutlet>
            {/* Tab Bar Buttons */}
            <IonTabBar color={theme} slot="bottom">
                <IonTabButton tab="home" href="/home">
                    <IonIcon icon={home}/>
                </IonTabButton>
                <IonTabButton tab="todo" href="/todo">
                    <IonIcon icon={list}/>
                </IonTabButton>
                <IonTabButton tab="settings" href="/settings">
                    <IonIcon icon={settings}/>
                </IonTabButton>
            </IonTabBar>

        </IonTabs>
    )
}
