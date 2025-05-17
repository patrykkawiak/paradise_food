import { PrepareDuration } from '../enums/duration';
import { KitchenType } from '../enums/kitchen';
import { Prices } from '../enums/prices';
import { Rates } from '../enums/rates';

export interface Restaurant {
  name: string;
  kitchen: KitchenType;
  duration: PrepareDuration;
  rates: Rates;
  prices: Prices;
  image: string;
}
