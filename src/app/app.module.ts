import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
