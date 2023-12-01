import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { IUsers } from 'src/app/core/types/types.interface';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: UsersService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: { user: IUsers }
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null],
      email: [null, Validators.compose([Validators.required])],
      name: [null, Validators.compose([Validators.required])],
      cpf: [null, Validators.compose([Validators.required])],
      telefone: [null, Validators.compose([Validators.required])],
      celular: [null],
    });
    this.form.patchValue(this.data.user);
  }
}
