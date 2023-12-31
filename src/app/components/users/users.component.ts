import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/core/types/types.interface';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private service: UsersService) {}

  ngOnInit(): void {}
}
