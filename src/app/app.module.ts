import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

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
import { MaterialModule } from './material.module';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';

import { AppState } from './reducers';
import { UsersEffects } from './user/users.effects';
import { GamesEffects } from './game/games.effects';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID
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
    StoreModule.forRoot(AppState),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([UsersEffects, GamesEffects]),
    AppRoutingModule,
    MaterialModule,
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
