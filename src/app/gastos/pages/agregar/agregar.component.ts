import { Component } from '@angular/core';
import { Gastos } from '../../interface';
import { GastosService } from '../../gastos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs';
import { PopdialogGastoComponent } from '../../popdialog-gasto/popdialog-gasto.component';
import { ProveedoresService } from 'src/app/proveedores/proveedores.service';
import { MateriaPrimaService } from 'src/app/materia-prima/servicios/materia-prima.service';
import { Proveedor } from 'src/app/proveedores/interface';
import { MateriaPrima } from 'src/app/materia-prima/interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  gasto: Gastos = {
    fecha:'',
    materiaprima: '',
    proveedor:'',
    cantidadCompra: 0,
    valorCompra: 0,
    valorAbonadoCC: 0,
    valorAbonadoFt: 0,
    saldo:0,
  }
  prov:Proveedor[]=[];
  mate:MateriaPrima[]=[];
  constructor(private gastosService: GastosService,
              private activateroute: ActivatedRoute,
              private router: Router,
              private matdialogarti:MatDialog,
              private proservice: ProveedoresService,
              private materiaPService:MateriaPrimaService  ) { }

  ngOnInit(): void {
    this.activateroute.params.pipe(switchMap(({id})=>this.gastosService.getGastosPorId(id))
      ).subscribe(gasto =>this.gasto=gasto);
    this.proservice.getProveedores().subscribe(resp=>this.prov=resp);
    this.materiaPService.getMateriaPrima2().subscribe(resp=>this.mate=resp);
    
  }
  calcularSaldo() {
    this.gasto.saldo = this.gasto.valorAbonadoFt -  this.gasto.valorCompra   ;
  }
  guardar(){
    // if (this.gasto.fecha.trim().length===0){
    //   return
    // }
    // actualizar
    if (this.gasto.id){
      this.gastosService.actualizarGastos( this.gasto )
        .subscribe( gasto => console.log ( 'actualizando', gasto ))
    }else{
    // crear
      this.gastosService.agregarGastos(this.gasto)
        .subscribe(resp=>{
        this.router.navigate(['gastos/listado']);   
        console.log('respuesta',resp);
      })
   }
  }
  borrar(){

    const dialog=this.matdialogarti.open(PopdialogGastoComponent,{
      
      width:'270px',
      height:'170px',
      data: {...this.gasto}
    });

    dialog.afterClosed().subscribe(
      (result)=>{
        if (result){
          this.gastosService.eliminarGastos(this.gasto.id!)
          .subscribe( resp =>{

          this.router.navigate(['articulo/listado']);
          });
        }
      }
    )
  }
}
