import { Routes } from '@angular/router';

export enum HeroRoute {
  HERO = '/hero',
}

export const HERO_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    loadComponent: () =>
      import('./hero-page/hero-page.component').then(
        (m) => m.HeroPageComponent
      ),
  },
] as const;
