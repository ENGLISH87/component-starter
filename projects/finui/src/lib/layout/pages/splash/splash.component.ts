import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fin-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplashPageComponent {}
