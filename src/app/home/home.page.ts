import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  events =[
    {id: 1, name: 'Concierto de Rock', price: 10000},
    {id: 2, name: 'Partido de futbol', price: 15000},
    {id: 3, name: 'Comicon', price: 20000}
  ];
  constructor() {}

}
