import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { SOCIAL_LINKS } from '../../data/contact.data';

@Component({
  selector: 'app-intro',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro {
  protected readonly social = SOCIAL_LINKS;
}
