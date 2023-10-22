import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fin-standard-page',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandardPageComponent {}
