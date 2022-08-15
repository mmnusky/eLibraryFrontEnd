import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AllbooksComponent } from './components/allbooks/allbooks.component';
import { AuthorComponent } from './components/author/author.component';
import { BooksComponent } from './components/books/books.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthorAdminGuard } from './Guard/author-admin.guard';
import { RoleAdminGuard } from './Guard/role-admin.guard';
import { RoleAuthorGuard } from './Guard/role-author.guard';
//AuthorComponent//RoleAuthorGuard
const appRoutes: Routes = [
  {
    path: '',
    component: AllbooksComponent
  },
  {
    path: 'allauthors',
    component: AuthorComponent,
    canActivate: [RoleAdminGuard]
  },
  {
    path: 'allbooks',
    component: AllbooksComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'books',
    component: BooksComponent,
    canActivate: [AuthorAdminGuard]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'author',
    component: AuthorComponent
  },
  {
    path: 'changestatus/:id',
    component: AuthorComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
