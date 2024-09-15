import { Component} from '@angular/core';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})

export class CheckoutPage {
  total: number = 0;
  event: any = {};
  name: string ='';
  surname: string ='';
  age: number = 0;
  tickets: number = 1;

  constructor(private ticketService: TicketService) {
    const details = this.ticketService.getDetails();
    if (details) {
      this.event = details.event;
      this.name = details.name;
      this.surname = details.surname;
      this.age = details.age;
      this.tickets = details.tickets;
      this.total = this.ticketService.calculateTotal();
    } else {
      console.error('No se encontraron los detalles de la compra.');
    }
  }
} 

