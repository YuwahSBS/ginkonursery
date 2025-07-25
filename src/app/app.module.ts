import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { HomeOneComponent } from './components/home-one/home-one.component';
import { HomeTwoComponent } from './components/home-two/home-two.component';
import { HeaderComponent } from './components/elements/header/header.component';
import { ServiceComponent } from './components/service/service.component';
import { InnerBannerComponent } from './components/elements/inner-banner/inner-banner.component';
import { FooterComponent } from './components/elements/footer/footer.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SliderPopupComponent } from './components/slider-popup/slider-popup.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectListsComponent } from './components/project-lists/project-lists.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ContactFormComponent } from './components/cmscontact/contact-form/contact-form.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectSubListsComponent } from './components/project-sub-lists/project-sub-lists.component';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HeaderComponent,
    ServiceComponent,
    InnerBannerComponent,
    FooterComponent,
    ContactusComponent,
    SliderPopupComponent,
    ProjectDetailComponent,
    ProjectsComponent,
    ProjectListsComponent,
    ContactFormComponent,
    ProjectSubListsComponent,
    HeroSliderComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 15000, // 15 seconds
      progressBar: true,
    }),

  //   HttpClientInMemoryWebApiModule.forRoot(
  //     InMemoryDataService, {dataEncapsulation: false, 
  // passThruUnknownUrl: true
  // }
  // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
