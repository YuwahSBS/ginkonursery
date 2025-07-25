import { ProjectSubListsComponent } from './components/project-sub-lists/project-sub-lists.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeOneComponent } from './components/home-one/home-one.component';
import { HomeTwoComponent } from './components/home-two/home-two.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectListsComponent } from './components/project-lists/project-lists.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServiceComponent } from './components/service/service.component';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';

const routes: Routes = [
    { path: '', component: HomeTwoComponent },
    { path: 'designandbuild', component: ProjectSubListsComponent },
    { path: 'implementation', component: ProjectSubListsComponent },
    { path: 'care&maintenence', component: ProjectSubListsComponent },
    { path: 'home-two', component: HomeTwoComponent },
    { path: 'services', component: ServiceComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'projects', component: ProjectListsComponent },
    //{path: ':category/:name', component: ProjectDetailComponent},
    //{ path: ':cat/:name', component: ProjectDetailComponent },
    { path: ':cat', component: ProjectListsComponent },
    { path: ':mcat/:scat/:pname', component: ProjectDetailComponent},
    { path: 'sliderTest', component: HeroSliderComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }