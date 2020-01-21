import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = 'BQB6D3FbO3J1Et2-QBGaWrjy962VD1U8sXALswQmJ5EWejoDTxS6XF54fBLXrpYtMx_oilp1N-Ljn8vAJMA';
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
}
