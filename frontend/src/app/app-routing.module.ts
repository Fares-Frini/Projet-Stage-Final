import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { SettingsComponent } from './settings/settings.component';
import { BodyComponent } from './body/body.component';
import { MainBodyComponent } from './main-page/main-body/main-body.component';
import { CatalogueComponent } from './main-page/catalogue/catalogue.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home-page/home/home.component';
import { AuthComponent } from './auth-page/auth/auth.component';
const routes: Routes = [
  { path: '', redirectTo: 'bibliotheque/home', pathMatch: 'full' },
  { path: 'admin', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  
  {
    path: 'admin', component: BodyComponent, children:
      [{ path: 'dashboard', component: DashboardComponent },
      { path: 'UsersManagement', component: UserManagementComponent },
      { path: 'BooksManagement', component: BookManagementComponent },
      { path: 'Options', component: SettingsComponent },
      { path: 'Log-Out', component: DashboardComponent },
      ]
  },
  { path: 'bibliotheque', redirectTo:'bibliotheque/home',pathMatch:'full'},
  { path: 'bibliotheque', component: MainBodyComponent ,children:
[{path:'catalogue',component: CatalogueComponent},
{path:'home',component: HomeComponent},
{path:'authentification',component:AuthComponent},
{path:'cart',component:CartPageComponent}] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


 