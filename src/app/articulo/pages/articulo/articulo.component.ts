import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloService } from '../../servicios/articulo.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
 
  articulo!:Articulo;
  
  constructor(private activateroute: ActivatedRoute,
              private articuloservice: ArticuloService,
              private router: Router){}

    ngOnInit(): void{

    this.activateroute.params
        .pipe(
          switchMap( ({ id })  => this.articuloservice.getArticuloPorId(id) )
      )
      .subscribe( articulo => this.articulo = articulo ) ;
  }
  regresar(){
   this.router.navigate(['articulo/listado']);
  }
}
