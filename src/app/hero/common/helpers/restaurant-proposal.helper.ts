import { PrepareDuration } from '../enums/duration';
import { KitchenType } from '../enums/kitchen';
import { Prices } from '../enums/prices';
import { Rates } from '../enums/rates';
import { Restaurant } from '../interfaces/restaurant';

export class RestaurantProposalHelper {
  public static getRestaurants(): Restaurant[] {
    const restaurants: Restaurant[] = [];

    const durations = [
      PrepareDuration.LESS_20,
      PrepareDuration.BETWEEN_20_40,
      PrepareDuration.MORE_THAN_40,
    ];
    const kitchens = [
      KitchenType.POLISH,
      KitchenType.ASIA,
      KitchenType.ITALIAN,
    ];
    const prices = [Prices.LESS_20, Prices.BETWEEN_20_40, Prices.MORE_THAN_40];
    const rates = [Rates.THREE_OR_LESS, Rates.FOUR, Rates.FIVE];

    let id = 1;
    for (const duration of durations) {
      for (const kitchen of kitchens) {
        for (const price of prices) {
          for (const rate of rates) {
            restaurants.push({
              name: `Restauracja #${id}`,
              duration,
              kitchen,
              prices: price,
              rates: rate,
              image: `restaurant-${id}`,
            });
            id++;
          }
        }
      }
    }

    return restaurants;
  }
}
