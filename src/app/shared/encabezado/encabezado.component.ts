import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  @Output() menuToggle = new EventEmitter<void>();
  constructor(){}
  onMenuToggleDispath():void{
    this.menuToggle.emit();
  }
}
