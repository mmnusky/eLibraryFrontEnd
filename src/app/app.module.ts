import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorComponent } from './components/author/author.component';
import { AllbooksComponent } from './components/allbooks/allbooks.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AuthGuard } from './Guard/auth.guard';
import { RoleAdminGuard } from './Guard/role-admin.guard';
import { RoleAuthorGuard } from './Guard/role-author.guard';


const appRoutes: Routes = [
  { path: '', component: BooksComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    AuthorComponent,
    AllbooksComponent,
    LogoutComponent,
    ImageUploadComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [AuthGuard, RoleAdminGuard, RoleAuthorGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
