import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  getList(): Observable<any[]> {
    return this.db.collection('users').valueChanges();
  }

  addUser(data) {
    return this.db.collection('users').add(data);
  }
}
