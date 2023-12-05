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
        { value: null, disabled: true },
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
      option: ['na', Validators.compose([Validators.required])],
    });
    this.form.get('option')?.valueChanges.subscribe((option) => {
      const celularControl = this.form.get('celular');

      if (option === 'na') {
        celularControl?.disable();
      } else {
        celularControl?.enable();
      }
    });
    this.form.patchValue(this.data.user);

    const initialCelularValue = this.form.get('celular')?.value;
    if (initialCelularValue !== 'na' && initialCelularValue !== null) {
      this.form.get('option')?.setValue('celular');
    }
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
