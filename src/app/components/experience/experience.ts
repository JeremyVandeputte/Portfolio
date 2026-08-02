import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { EXPERIENCES } from '../../data/experience.data';
import { EDUCATION } from '../../data/education.data';
import { FadeInOnScrollDirective } from '../../core/directives/fade-in-on-scroll.directive';

@Component({
  selector: 'app-experience',
  imports: [TranslatePipe, FadeInOnScrollDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  private readonly translate = inject(TranslateService);

  protected readonly experiences = [...EXPERIENCES].sort((a, b) =>
    b.startDate.localeCompare(a.startDate),
  );
  protected readonly education = [...EDUCATION].sort((a, b) =>
    b.startDate.localeCompare(a.startDate),
  );

  formatMonth(iso: string): string {
    const [year, month] = iso.split('-').map(Number);
    const date = new Date(year, month - 1, 1);
    const locale = this.translate.currentLang() === 'en' ? 'en-GB' : 'fr-BE';
    return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' }).format(date);
  }
}
