import {
  ApplicationConfig,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  inject,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideTranslateLoader, provideTranslateService } from '@ngx-translate/core';

import { routes } from './app.routes';
import { JsonTranslateLoader } from './core/i18n/json-translate-loader';
import { ThemeService } from './core/services/theme.service';
import { LanguageService } from './core/services/language.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
    ),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideTranslateService({
      lang: 'fr',
      fallbackLang: 'fr',
      loader: provideTranslateLoader(JsonTranslateLoader),
    }),
    provideAppInitializer(() => {
      inject(ThemeService);
      inject(LanguageService);
    }),
  ],
};
