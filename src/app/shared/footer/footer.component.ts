import { Component } from '@angular/core';
import { onFacebook, onInstagram, onGithub } from 'src/app/utils/hrefs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public onFacebook = onFacebook;
  public onInstagram = onInstagram;
  public onGithub = onGithub;
}
