export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Users',
      wrapper: {            
        element: '',       
        attributes: {}       
      },
      class: ''    
    },
    {
      name: 'List All',
      url: '/users/list',
      icon: 'icon-list',
    },
    {
      name: 'Create New',
      url: '/users/create',
      icon: 'icon-user-follow',
    },
    {
      name: 'Notifications',
      url: '/users/notifications',
      icon: 'icon-bell'
    },
    {
      title: true,
      name: 'Restaurants',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'List All',
      url: '/restaurants/list',
      icon: 'icon-list'
    },
    {
      name: 'Add New Store',
      url: '/restaurants/add',
      icon: 'icon-pencil'
    },
    {
      name: 'Locations',
      url: '/restaurants/locations',
      icon: 'icon-location-pin',
    },
    {
      name: 'Orders',
      url: '/restaurants/orders',
      icon: 'icon-basket-loaded'
    }
  ],
};
