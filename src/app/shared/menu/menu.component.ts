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
}
