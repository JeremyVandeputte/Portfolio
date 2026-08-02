import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { SKILL_CATEGORIES } from '../../data/skills.data';
import { FadeInOnScrollDirective } from '../../core/directives/fade-in-on-scroll.directive';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe, FadeInOnScrollDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly categories = SKILL_CATEGORIES;
}
