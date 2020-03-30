import { Routes,RouterModule } from '@angular/router';

import { ArtistasComponent } from './components/artistas/artistas.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';


export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'search', component:SearchComponent},
  {path:'artist/:id' ,component : ArtistasComponent},
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'**', pathMatch:'full', redirectTo:'home'}

];

export const APP_RUTAS= RouterModule.forRoot(routes);

