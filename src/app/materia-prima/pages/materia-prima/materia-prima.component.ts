import { Component } from '@angular/core';
import { MateriaPrima } from '../../interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MateriaPrimaService } from '../../servicios/materia-prima.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-materia-prima',
  templateUrl: './materia-prima.component.html',
  styleUrls: ['./materia-prima.component.css']
})
export class MateriaPrimaComponent {

  materiaPrima!: MateriaPrima;

  constructor(private activateroute: ActivatedRoute,
    private materiaPrimaService: MateriaPrimaService,
    private router: Router){}

    ngOnInit(): void{

    this.activateroute.params
      .pipe(
        switchMap( ({ id })  => this.materiaPrimaService.getMateriaPrimaPorId(id) )
    )
    .subscribe( materiaPrima => this.materiaPrima = materiaPrima ) ;
    }
    regresar(){
    this.router.navigate(['materiaPrima/listado']);
    }  












}
