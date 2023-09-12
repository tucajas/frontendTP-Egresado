import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() menuToggle = new EventEmitter<void>();
  constructor(){}
  closeMenu(){
    this.menuToggle.emit()
    
  }
  clientesMenuOpen = false;
  proveedoresMenuOpen = false;
  porcentajesMenuOpen = false;
  ordenTrabajoMenuOpen = false;
  articulosMenuOpen = false;
  tipoTrabajoMenuOpen = false;
  materiaPrimaMenuOpen = false;
  matPrimaMenuOpen = false;
  gastosMenuOpen = false;
  
  
  toggleClientesMenu() {
    this.clientesMenuOpen = !this.clientesMenuOpen;
  }

  toggleProveedoresMenu() {
    this.proveedoresMenuOpen = !this.proveedoresMenuOpen;
  }
  togglePorcentajesMenu() {
    this.porcentajesMenuOpen = !this.porcentajesMenuOpen;
  }
  toggleOrdenTrabajoMenu() {
    this.ordenTrabajoMenuOpen = !this.ordenTrabajoMenuOpen;
  }
  toggleArticulosMenu() {
    this.articulosMenuOpen = !this.articulosMenuOpen;
  }
  toggleTipoTrabajoMenu() {
    this.tipoTrabajoMenuOpen = !this.tipoTrabajoMenuOpen;
  }
  toggleMateriaPrimaMenu() {
    this.materiaPrimaMenuOpen = !this.materiaPrimaMenuOpen;
  }
  toggleMatPrimaMenu() {
    this.matPrimaMenuOpen = !this.matPrimaMenuOpen;
  }
  toggleGastosMenu() {
    this.gastosMenuOpen = !this.gastosMenuOpen;
  }


  closeMenu2() {
    // Agrega lógica para cerrar el menú aquí si es necesario
  }

}

