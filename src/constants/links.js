import React from 'react';
import HomeIcon from '@material-ui/icons/Home';

import { AccessAlarm } from '@material-ui/icons';
import SignIn from '../App/Auth/SignInContainer';

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
          id: 'talleres',
          textIcon: 'Talleres',
          route: '/talleres',
          icon: <HomeIcon />,
          //permissions: 'ROLE_TECNICO',
          showInMenu: true,
          component: <div>talleres</div>
        },
        {
          id: 'informes',
          textIcon: 'IN',
          route: '/informes',
          icon: <AccessAlarm />,
          //permissions: 'ROLE_TECNICO',
          showInMenu: true,
          component: <div>informes</div>
        }
      ]
    }
  ]
};
