import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonelListComponent } from './personel-list/personel-list.component';
import { PersonelAddComponent } from './personel-add/personel-add.component';
import { PersonelEditComponent } from './personel-edit/personel-edit.component';
import { PersonelDetailComponent } from './personel-detail/personel-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonelListComponent,
    PersonelAddComponent,
    PersonelEditComponent,
    PersonelDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
