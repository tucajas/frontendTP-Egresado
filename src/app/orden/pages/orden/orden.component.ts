import { Component } from '@angular/core';
import { Orden } from '../../interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from '../../servicios/servicios.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent {


  orden!:Orden;

  constructor(private activateroute: ActivatedRoute,
              private ordenService:ServiciosService ,
              private router: Router){}
    
    ngOnInit(): void{

      this.activateroute.params
        .pipe(
          switchMap( ({ id })  => this.ordenService.getOrdenesPorId(id) )
        )
        .subscribe( orden => this.orden = orden ) ;
    }
    regresar(){
      this.router.navigate(['orden/listado']);
    }

}
