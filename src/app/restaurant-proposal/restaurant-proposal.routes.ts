import { Routes } from '@angular/router';

export enum RestaurantProposalRoute {
  RESTAURANT_PROPOSAL = '/restaurant-proposal',
}

export const RESTAURANT_PROPOSAL_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    loadComponent: () =>
      import(
        './restaurant-proposal-page/restaurant-proposal-page.component'
      ).then((m) => m.RestaurantProposalPageComponent),
  },
] as const;
