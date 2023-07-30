import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from '../../interface';
import { ProveedoresService } from '../../proveedores.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit{

  proveedor!:Proveedor;

  constructor(private activateroute: ActivatedRoute,
              private proveedorService: ProveedoresService,
              private router: Router){}
    
    ngOnInit(): void{

      this.activateroute.params
        .pipe(
          switchMap( ({ id })  => this.proveedorService.getProveedorPorId(id) )
        )
        .subscribe( proveedor => this.proveedor = proveedor ) ;
    }
    regresar(){
      this.router.navigate(['proveedores/listado']);
    }






}
