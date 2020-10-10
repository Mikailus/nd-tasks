import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { FirstDirectiveDirective } from './first-directive.directive';
import { BackgroundColorDirective } from './background-color.directive';
import { ModuloPipe } from './modulo.pipe';
import { MyUpperCasePipe } from './my-upper-case.pipe';
import { AppendWordPipePipe } from './append-word-pipe.pipe';
import { SplitPhoneNumberPipe } from './split-phone-number.pipe';
import { CountriesComponent } from './countries/countries.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserTileComponent } from './user-tile/user-tile.component';
import { UserOneComponent } from './user-one/user-one.component';

const routes: Route[] = [
  { path: 'users', component: UsersComponent, children: [
    { path: 'list', component: UserListComponent },
    { path: 'tile', component: UserTileComponent },
    { path: ':id',  component: UserOneComponent },
  ]},
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FirstDirectiveDirective,
    BackgroundColorDirective,
    ModuloPipe,
    MyUpperCasePipe,
    AppendWordPipePipe,
    SplitPhoneNumberPipe,
    CountriesComponent,
    DashboardComponent,
    UserListComponent,
    UserTileComponent,
    UserOneComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
