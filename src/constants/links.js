import React from 'react';
import HomeIcon from '@material-ui/icons/Home';

import { AccessAlarm } from '@material-ui/icons';
import SignIn from '../App/Auth/SignInContainer';
import ExampleContainer from '../App/Example/ExampleContainer';

export const linkItems = {
    auth: [
        {
            id: 'signin',
            textIcon: 'SIgn in',
            route: '/sign-in',
            icon: <HomeIcon />,
            //permissions: 'ROLE_TECNICO',
            showInMenu: true,
            component: <SignIn />
        }
    ],
    dashboard: [
        {
            id: '1seccion',
            children: [
                {
                    id: '1pagina',
                    textIcon: '1 pagina',
                    route: '/1pagina',
                    icon: <HomeIcon />,
                    //permissions: 'ROLE_TECNICO',
                    showInMenu: true,
                    component: <ExampleContainer />
                },
                {
                    id: '2pagina',
                    textIcon: '2 pagina',
                    route: '/2pagina',
                    icon: <AccessAlarm />,
                    //permissions: 'ROLE_TECNICO',
                    showInMenu: true,
                    component: <div>2 pagina</div>
                }
            ]
        }
    ]
};
