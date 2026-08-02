import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateLoader, TranslationObject } from '@ngx-translate/core';

@Injectable()
export class JsonTranslateLoader extends TranslateLoader {
  private readonly http = inject(HttpClient);

  getTranslation(lang: string): Observable<TranslationObject> {
    return this.http.get<TranslationObject>(`assets/i18n/${lang}.json`);
  }
}
