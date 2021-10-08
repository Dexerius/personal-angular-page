import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

import { LandingPageComponent } from './landing-page.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  imports: [LandingRoutingModule, SharedModule, MaterialModule],
  exports: [],
  declarations: [LandingPageComponent],
  providers: [],
})
export class LandingPageModule {}
