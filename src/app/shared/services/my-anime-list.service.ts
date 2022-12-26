import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MyAnimeListService {
  constructor(private http: HttpClient) {}

  getCurrentSeasonAnime(): Observable<Anime[]> {
    const date = new Date();
    const getSeason = (d: Date) => Math.floor((d.getMonth() / 12) * 4) % 4;
    const season = ['winter', 'spring', 'summer', 'fall'][getSeason(date)];
    return this.http
      .get<{ data: [] }>(
        `https://api.jikan.moe/v4/seasons/${date.getFullYear()}/${season}`
      )
      .pipe(
        map((res) => (res.data as []).slice(0, 6)),
        delay(1500) // to show an awesome loading animation
      );
  }
}

export interface Anime {
  title: string;
  url: string;
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
      small_image_url: string;
    }
  }
  score?: number;
  synopsis: string;
}
