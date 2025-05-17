import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { ROUTES } from './app.routes';
import { RestaurantProposalService } from './hero/common/services/restaurant-proposal.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),

    RestaurantProposalService,
  ],
};
