import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf], //Solamente Modulos (Reactive, common)
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  constructor() {}

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    id: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+'),
    ]),
    family: new FormControl('', [Validators.required]),
    order: new FormControl('', [Validators.required]),
    genus: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted', this.form.value);
    } else {
      console.log('Form error');
    }
  }
}
