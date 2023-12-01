import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  form!: FormGroup;
  update: boolean = false;

  constructor(
    private service: UsersService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.update = false;
    this.form = this.formBuilder.group({
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
  }

  submit() {
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe();
      this.update = true;
    }
  }
}
