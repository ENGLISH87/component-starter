import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DrawerService } from '../../service/drawer.service';

@Component({
  selector: 'fin-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent {
  constructor(private drawerSvc: DrawerService) {}
}
