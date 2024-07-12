import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './games-contact.component.html',
  styleUrls: ['./games-contact.component.css']
})
export class GamesContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      console.log('Formulario enviado', this.contact);
      alert('Gracias por tu mensaje, ' + this.contact.name + '. Nos pondremos en contacto contigo pronto.');
      this.contact = { name: '', email: '', message: '' };
    } else {
      alert('Por favor, completa todos los campos del formulario.');
    }
  }
}
