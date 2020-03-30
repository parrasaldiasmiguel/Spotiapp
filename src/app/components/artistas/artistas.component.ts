import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html'
})
export class ArtistasComponent {

  artista:any={};
  loadingArtist:boolean;
  topTracks:any[]=[];

  constructor(private router:ActivatedRoute,private spotify:SpotifyService) { 
    this.loadingArtist=true;
    this.router.params.subscribe(params =>{
        this.getArtista(params['id']);
        this.getTopTracks(params['id']);

    });

  }

  getArtista(id:string){
    this.loadingArtist=true;
    this.spotify.getArtista(id).subscribe(artista=>{
      console.log(artista);
      this.artista=artista;
      this.loadingArtist=false;
    })
  }
  getTopTracks(id:string){

    this.spotify.getTopTracks(id).subscribe(topTracks =>{
    console.log(topTracks);
    this.topTracks=topTracks;
    });
  }
}
