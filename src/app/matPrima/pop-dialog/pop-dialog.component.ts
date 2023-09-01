import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { matPrima } from '../interface';

@Component({
  selector: 'app-pop-dialog',
  templateUrl: './pop-dialog.component.html',
  styleUrls: ['./pop-dialog.component.css']
})
export class PopDialogComponent {


  constructor(private dialogref: MatDialogRef<PopDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: matPrima){}

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
