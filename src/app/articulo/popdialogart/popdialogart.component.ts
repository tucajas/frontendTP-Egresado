import { Component, Inject } from '@angular/core';
import { Articulo } from '../interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popdialogart',
  templateUrl: './popdialogart.component.html',
  styleUrls: ['./popdialogart.component.css']
})
export class PopdialogartComponent {

  constructor(private dialogref: MatDialogRef<PopdialogartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Articulo){}

ngOnInit():void{
console.log(this.data)
}

borrar(){
this.dialogref.close(true);
}
cerrar(){
this.dialogref.close();
}



}
