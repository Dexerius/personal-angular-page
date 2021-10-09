import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { SeasonalAnimeComponent } from './components/seasonal-anime/seasonal-anime.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';

import { LandingPageComponent } from './landing-page.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  imports: [CommonModule, LandingRoutingModule, SharedModule, MaterialModule],
  exports: [],
  declarations: [
    LandingPageComponent,
    TechStackComponent,
    SeasonalAnimeComponent,
  ],
  providers: [],
})
export class LandingPageModule {}
