import { Component } from '@angular/core';
import { Gastos } from '../../interface';
import { ActivatedRoute, Router } from '@angular/router';
import { GastosService } from '../../gastos.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent {

  gasto!:Gastos;
  
  constructor(private activateroute: ActivatedRoute,
              private gastoservice: GastosService,
              private router: Router){}

    ngOnInit(): void{

    this.activateroute.params
        .pipe(
          switchMap( ({ id })  => this.gastoservice.getGastosPorId(id) )
      )
      .subscribe( gasto => this.gasto = gasto ) ;
  }
  regresar(){
   this.router.navigate(['gastos/listado']);
  }
}
