import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FruitService } from '../../services/fruit.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormGroup],
  providers: [FruitService],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  constructor(private fruitService: FruitService) {}

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    family: new FormControl('', [Validators.required]),
    order: new FormControl('', [Validators.required]),
    genus: new FormControl('', [Validators.required]),
    //nutritions: new FormControl ('',[]),
  });
  onSubmit() {
    console.log(this.form.valid);
  }
}
