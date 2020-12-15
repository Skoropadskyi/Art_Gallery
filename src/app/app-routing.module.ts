import { AnimalsComponent } from './shared/components/main-layout/menu/animals/animals.component';
import { BusinessComponent } from './shared/components/main-layout/menu/business/business.component';
import { CurrentComponent } from './shared/components/main-layout/menu/current/current.component';
import { FilmComponent } from './shared/components/main-layout/menu/film/film.component';
import { NatureComponent } from './shared/components/main-layout/menu/nature/nature.component';
import { TravelComponent } from './shared/components/main-layout/menu/travel/travel.component';
import { TechnologyComponent } from './shared/components/main-layout/menu/technology/technology.component';
import { WorkComponent } from './shared/components/main-layout/menu/work/work.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component: MainLayoutComponent, children: [
    {path: 'work-from-home', component: WorkComponent},
    {path: 'technology', component: TechnologyComponent},
    {path: 'travel', component: TravelComponent},
    {path: 'nature', component: NatureComponent},
    {path: 'film', component: FilmComponent},
    {path: 'current-events', component: CurrentComponent},
    {path: 'business-work', component: BusinessComponent},
    {path: 'animals', component: AnimalsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
