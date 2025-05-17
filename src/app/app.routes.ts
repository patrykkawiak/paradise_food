import { Routes } from '@angular/router';
import { HERO_ROUTES } from './hero/hero.routes';
import { RESTAURANT_PROPOSAL_ROUTES } from './restaurant-proposal/restaurant-proposal.routes';

export const ROUTES: Routes = [
  {
    path: 'hero',
    children: HERO_ROUTES,
  },
  {
    path: 'restaurant-proposal',
    children: RESTAURANT_PROPOSAL_ROUTES,
  },
  {
    path: '**',
    redirectTo: 'hero',
  },
];
