import { PrepareDuration } from '../enums/duration';
import { KitchenType } from '../enums/kitchen';
import { Prices } from '../enums/prices';
import { Rates } from '../enums/rates';

export interface RestaurantProposal {
  kitchenType: KitchenType | null;
  prepareDuration: PrepareDuration | null;
  prices: Prices | null;
  averageRates: Rates | null;
}
