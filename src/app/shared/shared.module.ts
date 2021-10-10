import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutBasicComponent } from './layout-basic/layout-basic.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, RouterModule, ClipboardModule],
  declarations: [FooterComponent, HeaderComponent, LayoutBasicComponent],
  exports: [
    FooterComponent,
    HeaderComponent,
    FlexLayoutModule,
    LayoutBasicComponent,
    HttpClientModule,
    ClipboardModule,
  ],
})
export class SharedModule {}
