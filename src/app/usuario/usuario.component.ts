import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

import { Usuarios } from '../usuario';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit{

    usuarios!: Usuarios[];

    constructor(private service: UsuariosService) {}

  ngOnInit(): void {

        this.service.list()
          .subscribe(dados => this.usuarios = dados)

        ;

  }

}
