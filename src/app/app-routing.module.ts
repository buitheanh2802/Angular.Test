import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : '/list'
  },
  {
    path : 'list',
    component : ListComponent
  },
  {
    path : 'edit/:id',
    component : UpdateComponent
  },
  {
    path : 'add',
    component : AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
