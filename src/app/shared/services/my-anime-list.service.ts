import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MyAnimeListService {
  constructor(private http: HttpClient) {}

  getCurrentSeasonAnime() {
    const date = new Date();
    const getSeason = (d: Date) => Math.floor((d.getMonth() / 12) * 4) % 4;
    const season = ['winter', 'spring', 'summer', 'fall'][getSeason(date)];
    this.http.get(`https://api.jikan.moe/v3/season/${date.getFullYear()}/${season}`).subscribe(console.log);
  }
}
