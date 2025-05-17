import { signal } from '@angular/core';
import { chain } from 'lodash';
import { Observable, of, Subject } from 'rxjs';
import { RestaurantProposalHelper } from '../helpers/restaurant-proposal.helper';
import { Restaurant } from '../interfaces/restaurant';
import { RestaurantProposal } from '../interfaces/restaurant-proposal';

export type ProposalUpdateData = Partial<
  typeof RESTAUREN_PROPOSAL_INITIAL_STATE
>;

export const RESTAUREN_PROPOSAL_INITIAL_STATE: RestaurantProposal = {
  kitchenType: null,
  averageRates: null,
  prepareDuration: null,
  prices: null,
};

export class RestaurantProposalService {
  public reload$ = new Subject<void>();

  private _restaurantProposal = signal(RESTAUREN_PROPOSAL_INITIAL_STATE);
  public get restaurantProposal() {
    return this._restaurantProposal.asReadonly();
  }

  public updateProposal(updatedValue: ProposalUpdateData): void {
    this._restaurantProposal.update((proposal) => ({
      ...proposal,
      ...updatedValue,
    }));
  }

  public clearProposal(reload = true) {
    this._restaurantProposal.set(RESTAUREN_PROPOSAL_INITIAL_STATE);
    if (reload) this.reload$.next();
  }

  public getProposalRestaurants(): Observable<Restaurant[]> {
    const data = this._restaurantProposal();

    return of(
      chain(RestaurantProposalHelper.getRestaurants())
        .filter(
          (restaurant) =>
            restaurant.kitchen === data.kitchenType &&
            restaurant.duration === data.prepareDuration &&
            restaurant.rates === data.averageRates &&
            restaurant.prices === data.prices
        )
        .orderBy((restaurant) => restaurant.name, 'asc')
        .value()
    );
  }
}
