import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { CounterComponent } from './components/counter/counter.component';

const components = [InputComponent, FormFieldComponent, CounterComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...components],
  providers: [],
  exports: [...components],
})
export class FormsModule {}
