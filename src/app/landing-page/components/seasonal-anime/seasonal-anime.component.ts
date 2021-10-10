import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  Anime,
  MyAnimeListService,
} from 'src/app/shared/services/my-anime-list.service';

@Component({
  selector: 'app-seasonal-anime',
  templateUrl: './seasonal-anime.component.html',
  styleUrls: ['./seasonal-anime.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => active', [
        // using status here for transition
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SeasonalAnimeComponent implements OnInit {
  constructor(private animeService: MyAnimeListService) {}

  loading = true;
  public animes!: Promise<Anime[]>;

  ngOnInit() {
    this.animes = this.animeService
      .getCurrentSeasonAnime()
      .toPromise()
      .finally(() => (this.loading = false));
  }

  onAnimeClick(url: string): void {
    window.open(url, '_blank');
  }

  generateArray = (n: number) => [...Array(n).keys()];
}
