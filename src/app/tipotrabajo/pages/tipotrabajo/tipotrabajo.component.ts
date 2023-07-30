import { Component, OnInit } from '@angular/core';
import { TipoTrabajo } from '../../interface';
import { ActivatedRoute, Router } from '@angular/router';
import { TipotrabajoService } from '../../tipotrabajo.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tipotrabajo',
  templateUrl: './tipotrabajo.component.html',
  styleUrls: ['./tipotrabajo.component.css']
})
export class TipotrabajoComponent implements OnInit{

  tipoTrabajo!:TipoTrabajo;

  constructor(private activateroute: ActivatedRoute,
              private tipoTrabajoService: TipotrabajoService,
              private router: Router){}

  ngOnInit(): void{

    this.activateroute.params
      .pipe(
        switchMap( ({ id })  => this.tipoTrabajoService.getTipoTrabajoPorId(id) )
    )
    .subscribe( tipotrabajo => this.tipoTrabajo = tipotrabajo ) ;
  }
  regresar(){
    this.router.navigate(['tipoTrabajo/listado']);
  }













}
