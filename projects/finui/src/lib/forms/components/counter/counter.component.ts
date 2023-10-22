import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fin-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {}
