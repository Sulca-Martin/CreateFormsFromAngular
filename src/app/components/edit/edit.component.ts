import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { FruitService } from '../../services/fruit.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf], //Solamente Modulos (Reactive, common)
  providers: [FruitService],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private fruitService: FruitService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      family: ['', Validators.required],
      order: ['', Validators.required],
      genus: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.fruitService.getFruit().subscribe((fruit) => {
      this.form.patchValue({
        name: fruit.name,
        id: fruit.id,
        family: fruit.family,
        order: fruit.order,
        genus: fruit.genus,
      });
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted', this.form.value);
    }
  }
}
