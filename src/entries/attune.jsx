import { mount } from '../app/mount.jsx';

mount({
  desktop: () => import('../pages/AttuneDesktop.jsx'),
  mobile: () => import('../pages/AttuneMobile.jsx'),
});
