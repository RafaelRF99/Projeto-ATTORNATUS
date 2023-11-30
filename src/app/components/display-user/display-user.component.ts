import { Component, Input, OnInit } from '@angular/core';
import { IUsers } from 'src/app/core/types/types.interface';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.scss'],
})
export class DisplayUserComponent implements OnInit {
  @Input() user!: IUsers;

  id: number = 0;
  name: string = '';
  email: string = '';

  ngOnInit(): void {
    this.id = this.user.id;
    this.name = this.user.name;
    this.email = this.user.email;
    console.log(this.name, this.email);
  }
}
