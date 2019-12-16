import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { GateApp07SharedModule } from 'app/shared/shared.module';
import { GateApp07CoreModule } from 'app/core/core.module';
import { GateApp07AppRoutingModule } from './app-routing.module';
import { GateApp07HomeModule } from './home/home.module';
import { GateApp07EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    GateApp07SharedModule,
    GateApp07CoreModule,
    GateApp07HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    GateApp07EntityModule,
    GateApp07AppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class GateApp07AppModule {}
