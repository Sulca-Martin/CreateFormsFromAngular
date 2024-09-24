import { Component, createComponent } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { CreateComponent } from './components/create/create.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PostListComponent,
    CreateComponent,
    ReactiveFormsModule,
    FormControl,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projectNew';
}
