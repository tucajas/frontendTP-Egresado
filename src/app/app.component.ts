import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tpFinal';

  hideImage = false;
  
  constructor(private router: Router) { }
  
  ngOnInit(): void {
    // Escucha eventos de cambio de ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verifica si estás en la ruta de inicio y muestra la imagen
        if (this.router.url === '/') {
          this.hideImage = false; // Muestra la imagen
        } else {
          this.hideImage = true; // Oculta la imagen para otras rutas
        }
      }
    });
  }
}
