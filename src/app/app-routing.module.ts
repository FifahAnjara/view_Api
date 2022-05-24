import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonelListComponent } from './personel-list/personel-list.component';
import { PersonelAddComponent } from './personel-add/personel-add.component';
import { PersonelEditComponent } from './personel-edit/personel-edit.component';
import { PersonelDetailComponent } from './personel-detail/personel-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/personels', pathMatch: 'full' },
  { path: 'personels', component: PersonelListComponent },
  { path: 'personel/:mat/detail', component: PersonelDetailComponent },
  { path: 'personel/:mat/update', component: PersonelEditComponent },
  { path: 'personel/add', component: PersonelAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
