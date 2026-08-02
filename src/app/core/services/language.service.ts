import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type AppLanguage = 'fr' | 'en';

const STORAGE_KEY = 'lang';
export const AVAILABLE_LANGUAGES: AppLanguage[] = ['fr', 'en'];
const DEFAULT_LANGUAGE: AppLanguage = 'fr';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly currentLang = this.translate.currentLang;

  constructor() {
    this.translate.addLangs(AVAILABLE_LANGUAGES);
    this.translate.setFallbackLang(DEFAULT_LANGUAGE);
    this.translate.use(this.resolveInitialLanguage());

    effect(() => {
      const lang = this.currentLang();
      if (!lang) {
        return;
      }
      this.document.documentElement.setAttribute('lang', lang);
      if (this.isBrowser) {
        localStorage.setItem(STORAGE_KEY, lang);
      }
    });
  }

  switchLang(lang: AppLanguage): void {
    this.translate.use(lang).subscribe();
  }

  private resolveInitialLanguage(): AppLanguage {
    if (!this.isBrowser) {
      return DEFAULT_LANGUAGE;
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'fr' || stored === 'en') {
      return stored;
    }
    return DEFAULT_LANGUAGE;
  }
}
