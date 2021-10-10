import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { ContactPageComponent } from './contact-page.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [CommonModule, ContactRoutingModule, SharedModule, MaterialModule],
  exports: [],
  declarations: [
    ContactPageComponent
  ],
  providers: [],
})
export class ContactPageModule {}
