import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { SearchService } from './services/search.service';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { WorkComponent } from './shared/components/main-layout/menu/work/work.component';
import { TechnologyComponent } from './shared/components/main-layout/menu/technology/technology.component';
import { TravelComponent } from './shared/components/main-layout/menu/travel/travel.component';
import { NatureComponent } from './shared/components/main-layout/menu/nature/nature.component';
import { FilmComponent } from './shared/components/main-layout/menu/film/film.component';
import { CurrentComponent } from './shared/components/main-layout/menu/current/current.component';
import { BusinessComponent } from './shared/components/main-layout/menu/business/business.component';
import { AnimalsComponent } from './shared/components/main-layout/menu/animals/animals.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    WorkComponent,
    TechnologyComponent,
    TravelComponent,
    NatureComponent,
    FilmComponent,
    CurrentComponent,
    BusinessComponent,
    AnimalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    MatIconModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
