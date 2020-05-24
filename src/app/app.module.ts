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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlCarouselComponent } from './main/owl-carousel/owl-carousel.component';
import { CoachesSliderComponent } from './main/coaches/coaches-slider/coaches-slider.component';

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
    OwlCarouselComponent,
    CoachesSliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
