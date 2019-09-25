import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from './shares/model/Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-firebase';
  users: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.users = db.collection('users').valueChanges();
  }
}
