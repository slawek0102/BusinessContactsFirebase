import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import {FirebaseService} from './services/firebase.service'

import { AppComponent } from './app.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyBVYLO2IULG3zCHhNqQ0HueXsvjAyzR9II',
  authDomain: 'businesscontacts-69296.firebaseapp.com',
  databaseURL: 'https://businesscontacts-69296.firebaseio.com',
  storageBucket: 'businesscontacts-69296.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
