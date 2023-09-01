import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPrimaService } from '../../mat-prima.service';
import { matPrima } from '../../interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-mat-prima',
  templateUrl: './mat-prima.component.html',
  styleUrls: ['./mat-prima.component.css']
})
export class MatPrimaComponent {


  matPrima!: matPrima;

  constructor(private activateroute: ActivatedRoute,
    private matPrimaService: MatPrimaService,
    private router: Router){}

    ngOnInit(): void{

    this.activateroute.params
      .pipe(
        switchMap( ({ id })  => this.matPrimaService.getmatPrimaPorId(id) )
    )
    .subscribe( matPrima => this.matPrima = matPrima ) ;
    }
    regresar(){
    this.router.navigate(['matPrima/listado']);
    }  

}
