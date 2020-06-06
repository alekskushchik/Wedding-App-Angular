import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';

import {HeaderComponent} from './header/header.component';
import {MainMenuComponent} from './header/main-menu/main-menu.component';
import {MainComponent} from './main/main.component';
import {FooterComponent} from './footer/footer.component';
import {HeroSectionComponent} from './main/hero-section/hero-section.component';
import {ServicesComponent} from './main/services-section/services.component';
import {OffersComponent} from './main/offers-section/offers.component';
import {CoachesComponent} from './main/coaches-section/coaches.component';
import {CoachesSliderComponent} from './main/coaches-section/coaches-slider/coaches-slider.component';
import {ServicesSliderComponent} from './main/services-section/services-slider/services-slider.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {DataService} from './services/data.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalComponent, NgbdModalContent} from './modal.component';
import {RegisterFormComponent} from './register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    MainComponent,
    FooterComponent,
    HeroSectionComponent,
    ServicesComponent,
    OffersComponent,
    CoachesComponent,
    CoachesSliderComponent,
    ServicesSliderComponent,
    NgbdModalComponent,
    NgbdModalContent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgbModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
