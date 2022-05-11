import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Personel } from '../model/model';
import { PersonelService } from '../service/personel.service';
import { BlogService } from '../blog/blog.service';

@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.component.html',
  styleUrls: ['./personel-list.component.css'],
  providers: [BlogService],
})
export class PersonelListComponent implements OnInit {
  personels: Personel[] = [];
  // users: any[] | undefined;

  constructor(
    private route: ActivatedRoute, // private personelService: PersonelService
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    // this.getPersonels();
    this.blogService.getUsers().subscribe((data) => (this.personels = data));
  }

  // getPersonels(): void {
  //   this.personelService
  //     .getPersonels()
  //     .subscribe((personels) => (this.personels = personels));
  // }
}
