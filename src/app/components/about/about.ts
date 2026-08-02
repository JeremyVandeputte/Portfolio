import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { FadeInOnScrollDirective } from '../../core/directives/fade-in-on-scroll.directive';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, FadeInOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
