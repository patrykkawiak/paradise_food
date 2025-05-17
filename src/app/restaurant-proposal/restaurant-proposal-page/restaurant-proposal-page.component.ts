import {
  ChangeDetectionStrategy,
  Component,
  computed,
  OnDestroy,
  signal,
} from '@angular/core';
import { Subject, switchMap } from 'rxjs';
import { MainButtonComponent } from '../../common/components/main-button/main-button.component';
import { PrepareDuration } from '../../hero/common/enums/duration';
import { KitchenType } from '../../hero/common/enums/kitchen';
import { Prices } from '../../hero/common/enums/prices';
import { Rates } from '../../hero/common/enums/rates';
import { TranslateHelper } from '../../hero/common/helpers/translate.helper';
import { Restaurant } from '../../hero/common/interfaces/restaurant';
import {
  ProposalUpdateData,
  RestaurantProposalService,
} from '../../hero/common/services/restaurant-proposal.service';

enum ProposalTab {
  KITCHEN = 0,
  DURATION = 1,
  PRICES = 2,
  AVERAGE_RATES = 3,
}

@Component({
  selector: 'app-restaurant-proposal-page',
  imports: [MainButtonComponent],
  templateUrl: './restaurant-proposal-page.component.html',
  styleUrl: './restaurant-proposal-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantProposalPageComponent implements OnDestroy {
  protected readonly TranslateHelper = TranslateHelper;

  protected tab = signal(ProposalTab.KITCHEN);
  protected restaurants = signal<Restaurant[] | null>(null);

  protected loadResult = new Subject<void>();

  protected questionData = computed(() => {
    const title = (() => {
      return {
        [ProposalTab.KITCHEN]: 'Jaki typ kuchni Ciebie interesuje?',
        [ProposalTab.DURATION]: 'Wybierz preferowany czas przygotowania',
        [ProposalTab.PRICES]: 'Jaki przedział cenowy Ciebie interesuje?',
        [ProposalTab.AVERAGE_RATES]: 'Wybierz średnią ocen',
      }[this.tab()];
    })();

    const image = (() => {
      return {
        [ProposalTab.KITCHEN]: 'kitchen-1',
        [ProposalTab.DURATION]: 'kitchen-2',
        [ProposalTab.PRICES]: 'kitchen-3',
        [ProposalTab.AVERAGE_RATES]: 'kitchen-4',
      }[this.tab()];
    })();

    const options = (() => {
      switch (this.tab()) {
        case ProposalTab.KITCHEN:
          return Object.values(KitchenType).map((value) => ({
            name: TranslateHelper.getKitchenTranslations(value),
            value,
          }));

        case ProposalTab.DURATION:
          return Object.values(PrepareDuration).map((value) => ({
            name: TranslateHelper.getDurationTranslations(value),
            value,
          }));

        case ProposalTab.PRICES:
          return Object.values(Prices).map((value) => ({
            name: TranslateHelper.getPriceTranslations(value),
            value,
          }));

        case ProposalTab.AVERAGE_RATES:
          return Object.values(Rates).map((value) => ({
            name: TranslateHelper.getRateTranslations(value),
            value,
          }));

        default:
          return [];
      }
    })();

    return { title, image, options };
  });

  constructor(private restaurantProposalService: RestaurantProposalService) {
    this.restaurantProposalService.reload$.subscribe(() => {
      this.tab.set(ProposalTab.KITCHEN);
      this.restaurants.set(null);
    });

    this.loadResult
      .pipe(
        switchMap(() => this.restaurantProposalService.getProposalRestaurants())
      )
      .subscribe((restaurants) => {
        this.restaurants.set(restaurants);
      });
  }

  public ngOnDestroy(): void {
    this.restaurantProposalService.clearProposal(false);
  }

  protected reset(): void {
    this.restaurantProposalService.clearProposal();
  }

  protected approve(value: KitchenType | PrepareDuration | Prices | Rates) {
    const data: ProposalUpdateData = {
      [ProposalTab.KITCHEN]: { kitchenType: value as KitchenType },
      [ProposalTab.DURATION]: { prepareDuration: value as PrepareDuration },
      [ProposalTab.PRICES]: { prices: value as Prices },
      [ProposalTab.AVERAGE_RATES]: { averageRates: value as Rates },
    }[this.tab()];

    this.restaurantProposalService.updateProposal(data);

    if (this.tab() === ProposalTab.AVERAGE_RATES) {
      this.loadResult.next();
    } else {
      this.tab.update((tab) => tab + 1);
    }
  }
}
