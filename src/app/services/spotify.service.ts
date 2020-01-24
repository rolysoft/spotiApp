import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = 'BQCaZKyw-jWYdClRZBHAL7M1VwlRIv5gIBPz4sIXu_d8Y65mm9ZzwMW-d0EO21LueWhnLGYeQv4mbbAus6k';
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
