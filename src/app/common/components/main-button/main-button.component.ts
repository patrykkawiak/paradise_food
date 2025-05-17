import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-button',
  imports: [],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainButtonComponent {}
