import { UserService } from 'src/app/shares/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  frm = new FormGroup({
    profile: new FormGroup({
      first: new FormControl(''),
      last: new FormControl(''),
      born: new FormControl(''),
      number: new FormControl(''),
    })
  });
  constructor(private userSerivce: UserService) { }

  ngOnInit() {
  }

  saveUser() {
    const data = this.frm.getRawValue();
    console.log(data);
    this.userSerivce.addUser(data)
      .then((result) => {
        console.log(result);
        this.frm.reset();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('Done');
      });
  }
}
