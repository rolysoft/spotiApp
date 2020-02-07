import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  loading: boolean = false;
  artista: any = {};
  topTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private spotify: SpotifyService ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( data => {
      console.log(data);
      console.log(data['id']);
      this.getArtista( data['id'] );
      this.getTopTracks( data['id'] );
    });
  }

  getArtista( id: string ) {
    this.loading = true;
    this.spotify.getArtista( id ).subscribe( data => {
      console.log(data);
      this.artista = data;
      this.loading = false;
    });
  }

  getTopTracks( id: string ) {
    this.loading = true;
    this.spotify.getTopTracks( id ).subscribe( data => {
      console.log(data);
      this.loading = false;
      this.topTracks = data;
    });
  }
}
