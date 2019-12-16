import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GateApp07SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [GateApp07SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class GateApp07HomeModule {}
