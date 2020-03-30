import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient){
    console.log('Spotify Service Listo');
   }

   getQuery(query:String){
const url=`https://api.spotify.com/v1/${query}`;
const headers= new HttpHeaders({
'Authorization':'Bearer BQBgRIO4MxGqIF0AMItwE15S7tjeWiI0-zl8P_gWeRX0GnQaz_jYlhaYsTgObJ00zBuNojUKaZQ8C7aHVL8'});

return this.http.get(url, {headers});

  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=21')
       .pipe(map(data =>data['albums'].items))
      };

    getArtistas(termino:String){
      return this.getQuery(`search?q=${termino}&type=artist&market=CL&limit=15`).
      pipe(map(data => data['artists'].items));
     }


     getArtista(id:string){
      return this.getQuery(`artists/${id}/`)
    //  pipe(map(data=>data['tracks']));

     }
     getTopTracks(id:String){
      return this.getQuery(`artists/${id}/top-tracks?country=CL`).pipe(map(data => data['tracks']));

     }
    
}
