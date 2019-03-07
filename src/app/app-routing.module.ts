import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component'; 
import { LaremProjectComponent } from './larem-project/larem-project.component';
import { LvcProjectComponent } from './lvc-project/lvc-project.component';
import { SeniorDesignProjectComponent } from './senior-design-project/senior-design-project.component';

const routes: Routes = [
	{ path: 'larem', component: LaremProjectComponent},
	{ path: 'lvc', component: LvcProjectComponent },
	{ path: 'seniorDesign', component: SeniorDesignProjectComponent},
  	{ path: '', component:  HomeComponent}
];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
