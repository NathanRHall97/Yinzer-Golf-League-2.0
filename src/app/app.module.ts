import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCJQvAKnVz5AlQoC1J1A75qT1Iud3IOdUM",
      authDomain: "yinzer-golf-league-2024.firebaseapp.com",
      projectId: "yinzer-golf-league-2024",
      storageBucket: "yinzer-golf-league-2024.firebasestorage.app",
      messagingSenderId: "355127275246",
      appId: "1:355127275246:web:6c5299c00fd7e387218dff",
      measurementId: "G-0QVKZ0P51X"
    }),
    AngularFirestoreModule,
    CommonModule
  ]
})
export class AppModule { }
