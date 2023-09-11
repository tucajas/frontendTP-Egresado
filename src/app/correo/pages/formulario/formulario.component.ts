// formulario.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  estado!: string;
  otroCampo!: string; // Agrega otras propiedades para los campos adicionales
  destinatario!: string; // Agrega la propiedad destinatario

  constructor(private http: HttpClient) {}

  enviarFormulario() {
    if (this.estado === 'finalizado'|| this.estado === 'en proceso') {
      const data = {
        estado: this.estado,
        destinatario: this.destinatario,
        otroCampo: this.otroCampo, // Agrega otros campos aquí
      };

      this.http.post('http://127.0.0.1:8000/correo/procesar_formulario/', data).subscribe(
        (response) => {
          console.log(response);
          // Lógica adicional después de enviar el formulario
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      // Manejo para otros estados
    }
  }
}
