import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MainButtonComponent } from './common/components/main-button/main-button.component';
import { RestaurantProposalService } from './hero/common/services/restaurant-proposal.service';
import { HeroRoute } from './hero/hero.routes';
import { RestaurantProposalRoute } from './restaurant-proposal/restaurant-proposal.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private restaurantProposalService: RestaurantProposalService,
    private router: Router
  ) {}

  protected openMainPage() {
    this.router.navigateByUrl(HeroRoute.HERO);
  }

  protected openProposal(): void {
    this.restaurantProposalService.clearProposal();
    this.router.navigateByUrl(RestaurantProposalRoute.RESTAURANT_PROPOSAL);
  }
}
