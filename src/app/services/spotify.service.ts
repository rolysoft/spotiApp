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
      'Authorization': 'Bearer BQBv3D-HrI5D4wjDgRuTzcSxstn-8MylEYqY9OcmzPhBaUIex8JAjFPed-U7tfo7om9egRTtmJwPjyk59kk'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers: headers }).subscribe(data => {
      console.log(data);
    });
  }
}
