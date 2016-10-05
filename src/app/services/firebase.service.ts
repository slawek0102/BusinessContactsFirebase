import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import 'rxjs/operator/map';
import {Business} from '../business';
import {Categories} from '../category';


@Injectable()
export class FirebaseService {

  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Categories[]>;


  constructor(private _af: AngularFire) {
  }

  getBusinesses() {
    this.businesses = this._af.database.list('/businesses') as FirebaseListObservable<Business[]>
    return this.businesses;

  }

  getCategories() {
    this.categories = this._af.database.list('/categories') as FirebaseListObservable<Categories[]>
    return this.categories;

  }


}






