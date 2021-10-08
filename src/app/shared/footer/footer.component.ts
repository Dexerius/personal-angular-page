import { Component } from '@angular/core';
import { facebook, github, instagram } from 'src/app/utils/hrefs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  onFacebook(): void {
    window.open(facebook, '_blank');
  }

  onInstagram(): void {
    window.open(instagram, '_blank');
  }

  onGithub(): void {
    window.open(github, '_blank');
  }
}
