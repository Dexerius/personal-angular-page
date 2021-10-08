import { Component, OnInit } from '@angular/core';
import { MyAnimeListService } from '../shared/services/my-anime-list.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(private animeService: MyAnimeListService) {}

  ngOnInit() {
    this.animeService.getCurrentSeasonAnime();
  }
}
