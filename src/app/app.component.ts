import { Component, OnInit } from '@angular/core';
import {FirebaseService} from './services/firebase.service';
import {Business} from "./business";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  businesses:Business[];

  constructor(private _firebaseServices: FirebaseService){

  }

  ngOnInit(){
    this._firebaseServices.getBusinesses().subscribe(businesses => {
      this.businesses = businesses;
      console.log(this.businesses)
    })

    this._firebaseServices.getCategories().subscribe(categories => {
      // console.log(categories);
    })



  }


}
