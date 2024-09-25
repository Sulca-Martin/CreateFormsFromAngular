import { Routes } from '@angular/router';
import path from 'path';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: EditComponent },
];
