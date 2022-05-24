import { Component, Input, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { Personel } from '../model/model';
import { PersonelService } from '../service/personel.service';

@Component({
  selector: 'app-personel-add',
  templateUrl: './personel-add.component.html',
  styleUrls: ['./personel-add.component.css'],
})
export class PersonelAddComponent implements OnInit {
  @Input() persone: Personel = {
    mat: '',
    nom: '',
    prenom: '',
    mobile: '',
    email: '',
    photo: '',
    adresse: '',
    password: '',
    service: '',
    fonction: '',
    direction: '',
  };

  constructor(
    private personelService: PersonelService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  save(): void {
    this.personelService
      .addPersonnel(this.persone)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
