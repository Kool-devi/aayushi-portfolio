import { mount } from '../app/mount.jsx';

mount({
  desktop: () => import('../pages/HomeDesktop.jsx'),
  mobile: () => import('../pages/HomeMobile.jsx'),
});
