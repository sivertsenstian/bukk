import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedInLoginProvider
} from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SettingsModule } from './settings/settings.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('117140863233218552695')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    SocialLoginModule,
    HomeModule,
    SettingsModule,
    UserModule,
    GameModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
