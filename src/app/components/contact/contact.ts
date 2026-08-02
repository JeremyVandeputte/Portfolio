import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { CONTACT } from '../../data/contact.data';
import { FadeInOnScrollDirective } from '../../core/directives/fade-in-on-scroll.directive';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe, FadeInOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly contact = CONTACT;
}
