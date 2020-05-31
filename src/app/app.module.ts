import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { CoachesSliderComponent } from './main/coaches/coaches-slider/coaches-slider.component';
import { ServicesSliderComponent } from './main/services/services-slider/services-slider.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {GetDataService} from './services/get-data.service';

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
    CoachesSliderComponent,
    ServicesSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
