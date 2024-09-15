import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})

export class EventDetailsPage implements OnInit {
  event: any;
  name = '';
  surname = '';
  age: number = 0;
  tickets = 1;

  constructor(private route: ActivatedRoute, private router: Router) {} // Inyectamos Router aquí

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.event = this.getEventById(+eventId); // Convertir eventId a número
    } else {
      this.event = { id: 0, name: 'Evento no encontrado', price: 0 };
    }
  }

  goToCheckout() {
    this.router.navigate(['/checkout'], {
      state: {
        event: this.event,
        name: this.name,
        surname: this.surname,
        age: this.age,
        tickets: this.tickets
      }
    });
  }

  getEventById(id: number) {
    const events = [
      { id: 1, name: 'Concierto de Rock', price: 100 },
      { id: 2, name: 'Partido de Fútbol', price: 50 },
      { id: 3, name: 'Película de Cine', price: 30 }
    ];
    return events.find(event => event.id === id) || { id: 0, name: 'Evento no encontrado', price: 0 };
  }

  calculateTotal() {
    let total = this.tickets * this.event.price;
    if (this.age < 18) {
      total *= 0.9;  // 10% descuento para menores de 18 años
    } else if (this.age > 60) {
      total *= 0.8;  // 20% descuento para mayores de 60 años
    }
    return total;
  }
}
