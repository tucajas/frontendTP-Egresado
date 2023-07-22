import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router,  RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { ClientesService } from '../../servicios/clientes_service';
import { Cliente } from '../../interface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  cliente!:Cliente;

  constructor(private activateroute: ActivatedRoute,
              private clienteservice: ClientesService,
              private router: Router){}
    
    ngOnInit(): void{

      this.activateroute.params
        .pipe(
          switchMap( ({ id })  => this.clienteservice.getClientePorId(id) )
        )
        .subscribe( cliente => this.cliente = cliente ) ;
    }
    regresar(){
      this.router.navigate(['clientes/listado']);
    }
  }

