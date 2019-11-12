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
                    id: 'Example',
                    textIcon: 'Example',
                    route: '/example',
                    icon: <HomeIcon />,
                    //permissions: 'ROLE_TECNICO',
                    showInMenu: true,
                    component: <ExampleContainer />
                },
                {
                    id: 'Example2',
                    textIcon: 'Example 2',
                    route: '/example2',
                    icon: <AccessAlarm />,
                    //permissions: 'ROLE_TECNICO',
                    showInMenu: true,
                    component: <div>2 pagina</div>
                }
            ]
        }
    ]
};
