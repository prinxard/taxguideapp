import React from 'react';
import * as FaIcons from 'react-icons/fa';


export const SidebarData = [
  {
    title: 'Introduction',
    path: '/',
    icon: <FaIcons.FaRegCircle />,
    cName: 'nav-text current-link',
    activeLink: 'current-link'
  },
  {
    title: 'Onboarding',
    path: '/onboarding',
    icon: <FaIcons.FaRegCircle />,
    cName: 'nav-text current-link',
    activeLink: 'current-link',

  },

  {
    title: 'Make Payment',
    path: '/makepayment',
    icon: <FaIcons.FaRegCircle />,
    cName: 'nav-text',
    activeLink: 'current-link'
  },
  {
    title: 'PAYE Monthly',
    path: '/uploadmonthly',
    icon: <FaIcons.FaRegCircle />,
    cName: 'nav-text ',
    activeLink: 'current-link'
  },
  {
    title: 'Monthly Remittance',
    path: '/monthlyremittance',
    icon: <FaIcons.FaRegCircle />,
    cName: 'nav-text ',
    activeLink: 'current-link'
  },

  {
    title: 'ATO Module',
    path: '/atomodule',
    icon: <FaIcons.FaRegCircle />,
    cName: 'nav-text ',
    activeLink: 'current-link'
  }
];
