import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';

import App from '../App';
import LicenseList from '../pages/LicenseList';
import SummaryPage from '../pages/SummaryPage';

const root = createRootRoute({
  component: App,
});

const licenseRoute = createRoute({
  getParentRoute: () => root,
  path: '/',
  component: LicenseList,
});

const summaryRoute = createRoute({
  getParentRoute: () => root,
  path: '/summary',
  component: SummaryPage,
});

const routeTree = root.addChildren([licenseRoute, summaryRoute]);

export const router = createRouter({ routeTree });
