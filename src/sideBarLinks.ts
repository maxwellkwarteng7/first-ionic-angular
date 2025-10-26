// Sidebar item interface
export interface SidebarItem {
  title: string;
  route?: string;
  icon?: string;
  roles?: ('admin' | 'client' | 'provider' | 'pro' | 'all')[];
  children?: SidebarItem[];
}

// Sidebar configuration
export const SIDEBAR_LINKS: SidebarItem[] = [
  {
    title: 'Overview',
    route: '/dashboard/overview',
    icon: 'home',
    roles: ['all'],
  },
  {
    title: 'Client',
    route: '/client',
    icon: 'person',
    roles: ['client', 'provider'], // show for client, provider, or both
  },
  {
    title: 'Provider',
    route: '/provider',
    icon: 'briefcase',
    roles: ['provider', 'client'],
  },
  {
    title: 'Worksheets',
    route: '/worksheets',
    icon: 'document-text',
    roles: ['pro'], // pro member feature
  },
  {
    title: 'Social Media',
    icon: 'share-social',
    roles: ['all'],
    children: [
      {
        title: 'Announcements',
        route: '/social/announcements',
        icon: 'megaphone',
        roles: ['all'],
      },
      {
        title: 'Stories',
        route: '/social/stories',
        icon: 'book',
        roles: ['all'],
      },
    ],
  },
  {
    title: 'Q&A Forum',
    route: '/forum',
    icon: 'chatbubbles',
    roles: ['all'],
  },
  {
    title: 'Payments',
    icon: 'card',
    roles: ['all'],
    children: [
      {
        title: 'Payment Setup',
        route: '/payments/setup',
        icon: 'settings',
        roles: ['all'],
      },
      {
        title: 'Member Subscription',
        route: '/payments/subscription',
        icon: 'cash',
        roles: ['all'],
      },
      {
        title: 'User Fulfilment',
        route: '/payments/fulfilment',
        icon: 'checkmark-done',
        roles: ['all'],
      },
      {
        title: 'General Payment Setup',
        route: '/payments/general',
        icon: 'settings',
        roles: ['admin'],
      },
      {
        title: 'Admin Fulfilment',
        route: '/payments/admin-fulfilment',
        icon: 'people',
        roles: ['admin'],
      },
    ],
  },
  {
    title: 'User Tools',
    icon: 'construct',
    roles: ['all'],
    children: [
      {
        title: 'Profile',
        route: '/tools/profile',
        icon: 'person-circle',
        roles: ['all'],
      },
      {
        title: 'Groups',
        route: '/tools/groups',
        icon: 'people-circle',
        roles: ['all'],
      },
      {
        title: 'Tour Data',
        route: '/tools/tour-data',
        icon: 'map',
        roles: ['all'],
      },
    ],
  },
  {
    title: 'Property',
    icon: 'home-outline',
    roles: ['all'],
    children: [
      {
        title: 'List property',
        route: '/property/list',
        icon: 'add-circle',
        roles: ['all'],
      },
      {
        title: 'Express interest',
        route: '/property/interest',
        icon: 'heart',
        roles: ['all'],
      },
    ],
  },
  {
    title: 'Customer Care',
    icon: 'headset',
    roles: ['admin'],
    children: [
      {
        title: 'Tour Data',
        route: '/customer/tour-data',
        icon: 'map',
        roles: ['admin'],
      },
      {
        title: 'Roles Update',
        route: '/customer/roles-update',
        icon: 'key',
        roles: ['admin'],
      },
    ],
  },
  {
    title: 'Messaging',
    icon: 'chatbox',
    roles: ['all'],
    children: [
      {
        title: 'Contact Us',
        route: '/messaging/contact',
        icon: 'mail',
        roles: ['all'],
      },
    ],
  },
];
