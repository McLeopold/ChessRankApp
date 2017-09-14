import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCLZo_A2bqgSywFrBcl_Fmm7sphJ7dbNgY",
  authDomain: "chessrank-5dc6c.firebaseapp.com",
  databaseURL: "https://chessrank-5dc6c.firebaseio.com",
  projectId: "chessrank-5dc6c",
  storageBucket: "chessrank-5dc6c.appspot.com",
  messagingSenderId: "158770539671"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
