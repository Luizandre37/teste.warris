import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API =' http://localhost:3000';

  constructor( private http: HttpClient) { }

   list () {
      return this.http.get<Usuario[]>(this.API);
   }

}
