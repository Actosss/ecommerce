import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from './core/core.module';
import { authInterceptorProviders } from './core/interceptors/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './core/guard/auth.guard';
import { AuthState } from './pages/login/state/auth.state';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    FontAwesomeModule,
    SharedModule,
    PagesModule,
    NgxsModule.forRoot([AuthState], {
    developmentMode: !environment.production}),
    NgxsLoggerPluginModule.forRoot(),

  ],
  providers: [authInterceptorProviders,AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
