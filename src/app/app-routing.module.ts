import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { EmployeesComponent }      from './employees/employees.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { EmployeeDetailComponent }      from './employee-detail/employee-detail.component';
import { EmployeeSearchComponent }      from './employee-search/employee-search.component';
import { CameraComponent }      from './camera/camera.component';
//import { FingerprintComponent }      from './fingerprint/fingerprint.component';
import { SignatureComponent }      from './signature/signature.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employee-search', component: EmployeeSearchComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent },
  { path: 'camera', component: CameraComponent },
  //{ path: 'fingerprint', component: FingerprintComponent },
  { path: 'signature', component: SignatureComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
