import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';
import { MaterialModule } from './material.module';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';

// currently there is a bug while building the app with --prod
// - https://github.com/RaphaelJenni/FirebaseUI-Angular/issues/76
// the plugin exposes the two libraries as well. You can use those:
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppState } from './reducers';
import { UsersEffects } from './user/users.effects';
import { GamesEffects } from './game/games.effects';
import { CommonEffects } from './effects/common.effects';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig, 'bukkolini'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),

    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(AppState),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([CommonEffects, UsersEffects, GamesEffects]),
    AppRoutingModule,
    MaterialModule,
    HomeModule,
    UserModule,
    GameModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
