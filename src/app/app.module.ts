import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './components/pages/pages.component';
import { HomeComponent } from './components/pages/home/home.component';
//import { LoginComponent } from './components/pages/login/login.component';
//import { ProdutoComponent } from './components/pages/produto/produto.component';
//simport { CadastroComponent } from './components/pages/cadastro/cadastro.component';
//import { HeaderComponent } from './components/header/header.component.spec';
//import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioListaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
