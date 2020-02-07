import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = 'BQCODM2SaA9O2HunI5zCFKF60g_tMVLBaJpHpl0Q_6w_9ns3UdS0gLRGM7ncT0duRcE86T1ZTCSxMs6itRk';
  constructor(private http: HttpClient) {
    console.log('>git remote add origin https://github.com/rolysoft/spotiApp.git');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<any>(url, { headers: headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(map(data => {
      return data['albums'].items;
    }));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(map(data => data.artists.items));
  }

  getArtista( id: string ) {
    return this.getQuery(`artists/${id}`).pipe(map(data => data));
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map(data => data.tracks));
  }
}
