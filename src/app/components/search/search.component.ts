import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor( private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string) {
    this.spotifyService.getArtistas(termino).subscribe(data => {
      console.log(data)
    })
    //console.log(termino)
  }

}
