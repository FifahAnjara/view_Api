import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Personel } from '../model/model';
import { PersonelService } from '../service/personel.service';

@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.component.html',
  styleUrls: ['./personel-list.component.css'],
})
export class PersonelListComponent implements OnInit {
  personels: Personel[] = [];

  constructor(
    private route: ActivatedRoute,
    private personelService: PersonelService
  ) {}

  ngOnInit(): void {
    this.getPersonels();
  }

  getPersonels(): void {
    this.personelService
      .getPersonels()
      .subscribe((personels) => (this.personels = personels));
  }
}
