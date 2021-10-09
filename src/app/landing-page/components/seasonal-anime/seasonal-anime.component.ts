import { Component, OnInit } from '@angular/core';
import {
  Anime,
  MyAnimeListService,
} from 'src/app/shared/services/my-anime-list.service';

@Component({
  selector: 'app-seasonal-anime',
  templateUrl: './seasonal-anime.component.html',
  styleUrls: ['./seasonal-anime.component.scss'],
})
export class SeasonalAnimeComponent implements OnInit {
  constructor(private animeService: MyAnimeListService) {}

  public animes!: Promise<Anime[]>;

  ngOnInit() {
    this.animes = this.animeService.getCurrentSeasonAnime().toPromise();
  }

  onAnimeClick(url: string): void {
    window.open(url, '_blank');
  }
}
