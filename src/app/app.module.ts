import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http';

//RUTAS
import {routes} from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

//PIPES
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtistasComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    LoadingComponent,
    TarjetasComponent,
    DomseguroPipe,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash:true}),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
