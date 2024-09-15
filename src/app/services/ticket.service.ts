import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private details: any;

  constructor() {}

  setDetails(details: any) {
    this.details = details;
  }

  getDetails() {
    return this.details;
  }

  calculateTotal() {
    const { age, tickets, event } = this.details || {};
    let total = tickets * event.price;
    if (age < 18) {
      total *= 0.9;  // 10% descuento para menores de 18
    } else if (age > 60) {
      total *= 0.8;  // 20% descuento para mayores de 60
    }
    return total;
  }
}
