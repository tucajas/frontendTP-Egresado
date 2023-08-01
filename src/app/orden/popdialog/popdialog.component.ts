import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Orden } from '../interface';

@Component({
  selector: 'app-popdialog',
  templateUrl: './popdialog.component.html',
  styleUrls: ['./popdialog.component.css']
})
export class PopdialogComponent {



  constructor(private dialogref: MatDialogRef<PopdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Orden){}

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
