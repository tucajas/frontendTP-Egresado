import { Component, OnInit } from '@angular/core';
import { Descuento } from '../../interface';
import { ActivatedRoute, Router } from '@angular/router';
import { DescuentoServiciosService } from '../servicios/descuento-servicios.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-porcentaje',
  templateUrl: './porcentaje.component.html',
  styleUrls: ['./porcentaje.component.css']
})
export class PorcentajeComponent implements OnInit{

  descuento!:Descuento;
  
  constructor(private activateroute: ActivatedRoute,
              private porcentajesService: DescuentoServiciosService,
              private router: Router){}

    ngOnInit(): void{

    this.activateroute.params
        .pipe(
          switchMap( ({ id })  => this.porcentajesService.getDescuentoPorId(id) )
      )
      .subscribe( descuento => this.descuento = descuento ) ;
  }
  regresar(){
   this.router.navigate(['porcentajes/listado']);
  }
}



