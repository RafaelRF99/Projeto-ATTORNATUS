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
  update: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: UsersService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: { user: IUsers }
  ) {}

  ngOnInit(): void {
    this.update = false;
    this.form = this.formBuilder.group({
      id: [null],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      name: [null, Validators.compose([Validators.required])],
      cpf: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ]),
      ],
      celular: [
        null,
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });
    this.form.patchValue(this.data.user);
  }

  submit() {
    this.service.update(this.form.value).subscribe({
      error(err) {
        console.log('Algo de errado aconteceu, erro:', err);
      },
    });
    this.update = true;
  }

  delete() {
    const UserSelected = this.data.user;
    this.service.delete(UserSelected).subscribe({
      error(err) {
        console.log(err);
      },
    });
  }
}
