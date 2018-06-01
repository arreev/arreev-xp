
import { Component,OnInit,AfterViewInit,OnDestroy } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,OnDestroy
{
  m1 = '';
  m2 = '';
  val = '';

  constructor() {
    console.log( 'AppComponent V 1.0001' );
  }

  ngOnInit(): void {
    const config = {
      apiKey: 'AIzaSyCD0_E9cc3CRwbkRyQe8W9-4CalR1FSYKc',
      authDomain: 'arreev-xp.firebaseapp.com',
      databaseURL: 'https://arreev-xp.firebaseio.com',
      projectId: 'arreev-xp',
      storageBucket: 'arreev-xp.appspot.com',
      messagingSenderId: '775733429628'
    };

    console.log( 'firebase.initializeApp...' );
    firebase.initializeApp( config );
    console.log( 'firebase.initializeApp ok' );
  }

  ngAfterViewInit(): void {
    this.m1 = 'setting value...';
    firebase.database().ref('records' ).child('test' )
      .set( Date.now() )
      .then(() => {
        this.m2 = 'ok';
        this.update();
      } )
      .catch(r => console.log( r ) );
  }

  private update() {
    firebase.database().ref('records' ).child('test' )
      .once('value' )
      .then( snapshot => {
        this.val = snapshot.val();
      } )
      .catch(r => console.log( r ) );
  }

  ngOnDestroy(): void {
  }
}

