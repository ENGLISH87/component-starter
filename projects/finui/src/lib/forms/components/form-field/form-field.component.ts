import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fin-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {}
