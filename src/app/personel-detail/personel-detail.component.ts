import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Personel } from '../model/model';
import { PersonelService } from '../service/personel.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-personel-detail',
  templateUrl: './personel-detail.component.html',
  styleUrls: ['./personel-detail.component.css'],
})
export class PersonelDetailComponent implements OnInit {
  personel: Personel[] = [];
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
      .subscribe((respons) => (this.personel = respons.data));
  }
  goBack(): void {
    this.location.back();
  }
}
