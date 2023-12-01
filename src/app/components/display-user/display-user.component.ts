import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IUsers } from 'src/app/core/types/types.interface';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.scss'],
})
export class DisplayUserComponent implements OnInit {
  user: IUsers = {
    id: 0,
    name: '',
    email: '',
    cpf: '',
    celular: '',
  };
  displayedColumns: string[] = ['icon', 'name', 'email', 'action'];
  dataSource!: IUsers[];

  constructor(public dialog: MatDialog, private service: UsersService) {}

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((dado) => {
      this.dataSource = dado;
    });
  }

  openDialog(user: IUsers) {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      data: { user },
    });

    dialogRef.afterClosed().subscribe();
  }
}
