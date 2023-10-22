import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardPageComponent } from './pages/standard/standard.component';
import { SplashPageComponent } from './pages/splash/splash.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { DrawerService } from './service/drawer.service';

const pages = [StandardPageComponent, SplashPageComponent];
const components = [HeaderComponent, SidenavComponent, DrawerComponent];
const services = [DrawerService];

@NgModule({
  imports: [CommonModule],
  providers: [...services],
  declarations: [...pages, ...components],
  exports: [...pages, ...components, ...services],
})
export class LayoutModule {}
