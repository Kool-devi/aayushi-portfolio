import { mount } from '../app/mount.jsx';

mount({
  desktop: () => import('../pages/DarkRoastDesktop.jsx'),
  mobile: () => import('../pages/DarkRoastMobile.jsx'),
});
