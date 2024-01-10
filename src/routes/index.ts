import { RouteObject } from 'react-router-dom';
import * as Home from './home';
import * as About from './about';
import * as Pricing from './pricing';

export const routes: RouteObject[] = [
  {
    path: "/",
    ...Home
  },
  {
    path: "/about",
    ...About
  },
  {
    path: "/pricing",
    ...Pricing
  }
];
