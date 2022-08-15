import { lazy } from 'react';

const RouteComp = (lazyImport) => {
  const Component = lazy(() => {
    return lazyImport;
  });
  return <Component />;
};

const routes = [
  {
    path: '/',
    component: RouteComp(import('./home')),
    auth: false,
  },
];

export default routes;
