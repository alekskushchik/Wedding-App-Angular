import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeroSectionComponent } from './main/hero-section/hero-section.component';
import { ServicesComponent } from './main/services/services.component';
import { OffersComponent } from './main/offers/offers.component';
import { CoachesComponent } from './main/coaches/coaches.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    MainMenuComponent,
    MainComponent,
    FooterComponent,
    HeroSectionComponent,
    ServicesComponent,
    OffersComponent,
    CoachesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
