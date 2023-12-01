import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './create-user/create-user.component';

@Component({
  selector: 'app-botao-add',
  templateUrl: './botao-add.component.html',
  styleUrls: ['./botao-add.component.scss'],
})
export class BotaoAddComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CreateUserComponent);

    dialogRef.afterClosed().subscribe();
  }
}
