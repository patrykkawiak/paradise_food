import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainButtonComponent } from '../../common/components/main-button/main-button.component';
import { RestaurantProposalRoute } from '../../restaurant-proposal/restaurant-proposal.routes';
import { RestaurantProposalService } from '../common/services/restaurant-proposal.service';

@Component({
  selector: 'app-hero-page',
  imports: [MainButtonComponent],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {
  constructor(
    private restaurantProposalService: RestaurantProposalService,
    private router: Router
  ) {}

  protected openProposal(): void {
    this.restaurantProposalService.clearProposal();
    this.router.navigateByUrl(RestaurantProposalRoute.RESTAURANT_PROPOSAL);
  }
}
