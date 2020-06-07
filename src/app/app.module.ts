import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {MainMenuComponent} from './components/header/main-menu/main-menu.component';
import {MainComponent} from './components/main/main.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeroSectionComponent} from './components/main/hero-section/hero-section.component';
import {ServicesComponent} from './components/main/services-section/services.component';
import {OffersComponent} from './components/main/offers-section/offers.component';
import {CoachesComponent} from './components/main/coaches-section/coaches.component';
import {CoachesSliderComponent} from './components/main/coaches-section/coaches-slider/coaches-slider.component';
import {ServicesSliderComponent} from './components/main/services-section/services-slider/services-slider.component';

import {CarouselModule} from 'ngx-owl-carousel-o';
import {ToastrModule} from 'ngx-toastr';
import {HttpService} from './shared/http.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalComponent, NgbdModalContent} from './components/modal/modal.component';
import {RegisterFormComponent} from './components/modal/register-form/register-form.component';
import {AuthenticationInterceptor} from './shared/interceptor';
import {AtomSpinnerModule, OrbitSpinnerModule} from 'angular-epic-spinners';

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
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-full-width',
      preventDuplicates: true,
      closeButton: true
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgbModule,
    AtomSpinnerModule,
    OrbitSpinnerModule
  ],
  providers: [
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
