import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IUsers } from 'src/app/core/types/types.interface';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.scss'],
})
export class DisplayUserComponent implements OnInit {
  @Input() user: IUsers = {
    id: 0,
    name: '',
    email: '',
    cpf: '',
    telefone: '',
    celular: '',
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe();
    // this.service.searchId(this.user.id).subscribe((dado) => {
    //   this.service.SelectedUser = dado;
    //   console.log(dado);
    // });
  }
}
