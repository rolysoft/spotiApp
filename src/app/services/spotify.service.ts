import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Sp listo');
   }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBBaWyltGJbmsbhpKneusgYS0_czy3zuEZe2WPhjFAiuNnHY6z-0jZM_aP8AgwQ8u6W4fG1DDLprYYWvSM'
    });

    return this.http.get<any>('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers: headers });
  }

  getArtistas( termino: string ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBBaWyltGJbmsbhpKneusgYS0_czy3zuEZe2WPhjFAiuNnHY6z-0jZM_aP8AgwQ8u6W4fG1DDLprYYWvSM'
    });
    return this.http.get<any>(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, { headers: headers });
  }
}
