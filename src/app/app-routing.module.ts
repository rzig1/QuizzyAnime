import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionLoginComponent } from './inscription-login/inscription-login.component';
import { AuthGuard } from './auth.guard'; // Ensure this is implemented correctly

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Protect this route with AuthGuard
  { path: 'login', component: InscriptionLoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect root to login
  { path: '**', redirectTo: '/login' }, // Handle undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
