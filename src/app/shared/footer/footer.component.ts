import { Component } from '@angular/core';
import { onFacebook, onInstagram, onGithub } from 'src/app/utils/hrefs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly socials: {
    path: string;
    desc: string;
    alt: string;
    action: () => void;
  }[] = [
    {
      path: './assets/logos/facebook.svg',
      desc: 'Visit my facebook page',
      alt: 'redirect to facebook page',
      action: onFacebook,
    },
    {
      path: './assets/logos/instagram.svg',
      desc: 'Visit my instagram page',
      alt: 'redirect to instagram page',
      action: onInstagram,
    },
    {
      path: './assets/logos/github.svg',
      desc: 'Visit my github page',
      alt: 'redirect to github page',
      action: onGithub,
    },
  ];
}
