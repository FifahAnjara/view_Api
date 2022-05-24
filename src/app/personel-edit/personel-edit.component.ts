import { Component, Input, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Personel } from '../model/model';
import { PersonelService } from '../service/personel.service';

@Component({
  selector: 'app-personel-edit',
  templateUrl: './personel-edit.component.html',
  styleUrls: ['./personel-edit.component.css'],
})
export class PersonelEditComponent implements OnInit {
  @Input()
  perso: Personel[] = [];

  constructor(
    private route: ActivatedRoute,
    private personelService: PersonelService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPersonel();
  }

  getPersonel(): void {
    const mat = this.route.snapshot.paramMap.get('mat');
    this.personelService
      .getPersonel(mat)
      .subscribe((pers) => (this.perso = pers.data));
  }

  save(): void {
    this.personelService.updatePersonnel(this.perso).subscribe((success) => {
      this.goBack();
    });
  }

  goBack(): void {
    this.location.back();
  }
}
