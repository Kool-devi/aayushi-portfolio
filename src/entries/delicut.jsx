import { mount } from '../app/mount.jsx';

mount({
  desktop: () => import('../pages/DelicutDesktop.jsx'),
  mobile: () => import('../pages/DelicutMobile.jsx'),
});
