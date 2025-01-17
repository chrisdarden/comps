import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './CollectionsHome.component.html',
  styleUrls: ['./CollectionsHome.component.scss']
})
export class CollectionsHomeComponent implements OnInit {

  data: {name: string, age: number, job: string, employed: boolean}[] = [{
    name: 'James',
    age: 24,
    job: 'Designer',
    employed: true,
  }, {
    name: 'Jill',
    age: 26,
    job: 'Engineer',
    employed: false,
  }, {
    name: 'Elyse',
    age: 25,
    job: 'Engineer',
    employed: true,
  }];

  headers = [{
    key: 'employed',
    label: 'Has a Job?'
  },
    {
    key: 'name',
    label: 'Name'
  }, {
    key: 'age',
    label: 'Age'
  }, {
    key: 'job',
    label: 'Job'
  }];

  constructor() { }

  ngOnInit() {
  }

}
