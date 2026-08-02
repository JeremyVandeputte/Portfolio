import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';
import { TranslatePipe } from '@ngx-translate/core';

import { ThemeService } from '../../core/services/theme.service';
import { AVAILABLE_LANGUAGES, LanguageService } from '../../core/services/language.service';

interface NavItem {
  fragment: string;
  labelKey: string;
}

const NAV_ITEMS: NavItem[] = [
  { fragment: 'home', labelKey: 'nav.home' },
  { fragment: 'about', labelKey: 'nav.about' },
  { fragment: 'experience', labelKey: 'nav.experience' },
  { fragment: 'skills', labelKey: 'nav.skills' },
  { fragment: 'projects', labelKey: 'nav.projects' },
  { fragment: 'contact', labelKey: 'nav.contact' },
];

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly theme = inject(ThemeService);
  protected readonly lang = inject(LanguageService);

  protected readonly navItems = NAV_ITEMS;
  protected readonly languages = AVAILABLE_LANGUAGES;
  protected readonly mobileOpen = signal(false);
  protected readonly activeFragment = signal('home');

  private scrollListenerCleanup?: () => void;

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  protected readonly isCvView = computed(() => this.currentUrl().startsWith('/cv'));

  constructor() {
    // Re-run whenever the route toggles between the portfolio page and /cv:
    // the section elements are destroyed/recreated by the router, so the
    // scroll spy has to be torn down and rebuilt against the fresh DOM nodes.
    effect((onCleanup) => {
      const isCv = this.isCvView();
      this.teardownScrollSpy();

      if (isCv || !isPlatformBrowser(this.platformId)) {
        return;
      }

      const timer = setTimeout(() => this.setupScrollSpy(), 0);
      onCleanup(() => {
        clearTimeout(timer);
        this.teardownScrollSpy();
      });
    });
  }

  toggleMobile(): void {
    this.mobileOpen.update((open) => !open);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }

  private setupScrollSpy(): void {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    if (!sections.length) {
      return;
    }

    // A section is "active" once it has scrolled past a reference line just
    // below the sticky navbar — walking the sections in document order and
    // keeping the last match naturally picks the bottom-most one currently
    // in view. Being scrolled all the way to the bottom of the page is just
    // a special case of the same rule: the document can't scroll any
    // further, so the last section is, by definition, the one in view, even
    // if it's short enough that its top never actually reaches the
    // reference line (e.g. Contact).
    const referenceLine = 120;

    const updateActiveSection = () => {
      const doc = document.documentElement;
      const scrolledToBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 1;

      let current = sections[0].id;
      for (const section of sections) {
        if (scrolledToBottom || section.getBoundingClientRect().top <= referenceLine) {
          current = section.id;
        }
      }
      this.activeFragment.set(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateActiveSection();
    this.scrollListenerCleanup = () => window.removeEventListener('scroll', onScroll);
  }

  private teardownScrollSpy(): void {
    this.scrollListenerCleanup?.();
    this.scrollListenerCleanup = undefined;
  }
}
