import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[];
  loading: boolean;

  constructor( private spotifyService: SpotifyService, private http: HttpClient ) {

    this.loading = true;

    this.spotifyService.getNewReleases().subscribe(data => {
      console.log(data);
      this.nuevasCanciones = data;  //.albums.items;
      this.loading = false;
    });

    /*this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (data: any) => {
      this.paises = data;
      console.log(data);
    });*/
   }


  ngOnInit() {
  }

}
