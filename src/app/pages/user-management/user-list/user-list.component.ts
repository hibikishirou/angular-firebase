import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shares/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/shares/model/Users';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  dataSource = new MatTableDataSource<User>();
  displayedColumns = [
    'first',
    'last',
    'born',
    'number'
  ];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.userService.getList().subscribe(
      result => {
        this.dataSource.data = result;
        console.log(result);
      }
    );
  }
}
