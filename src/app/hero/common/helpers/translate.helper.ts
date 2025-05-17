import { PrepareDuration } from '../enums/duration';
import { KitchenType } from '../enums/kitchen';
import { Prices } from '../enums/prices';
import { Rates } from '../enums/rates';

export class TranslateHelper {
  public static getKitchenTranslations(type: KitchenType) {
    return {
      [KitchenType.POLISH]: 'Polska',
      [KitchenType.ASIA]: 'Azjatycka',
      [KitchenType.ITALIAN]: 'Włoska',
    }[type];
  }

  public static getDurationTranslations(duration: PrepareDuration): string {
    return {
      [PrepareDuration.LESS_20]: 'Mniej niż 20min',
      [PrepareDuration.BETWEEN_20_40]: '20min do 40min',
      [PrepareDuration.MORE_THAN_40]: 'Więcej niż 40min',
    }[duration];
  }

  public static getPriceTranslations(price: Prices): string {
    return {
      [Prices.LESS_20]: 'Mniej niż 20zł',
      [Prices.BETWEEN_20_40]: '20zł do 40zł',
      [Prices.MORE_THAN_40]: 'Więcej niż 40zł',
    }[price];
  }

  public static getRateTranslations(rate: Rates): string {
    return {
      [Rates.FIVE]: '5 gwiazdek',
      [Rates.FOUR]: '4 gwiazdki',
      [Rates.THREE_OR_LESS]: '3 gwiazdki i mniej',
    }[rate];
  }
}
