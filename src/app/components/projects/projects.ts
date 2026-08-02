import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { PROJECTS, Project } from '../../data/projects.data';
import { FadeInOnScrollDirective } from '../../core/directives/fade-in-on-scroll.directive';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe, FadeInOnScrollDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  protected readonly projects = PROJECTS;
  protected readonly selectedProject = signal<Project | null>(null);
  protected readonly activeImageIndex = signal(0);

  private readonly mediaScroller = viewChild<ElementRef<HTMLElement>>('mediaScroller');

  /** Element that opened the modal, so focus can return to it on close. */
  private lastTrigger: HTMLElement | null = null;

  constructor() {
    effect(() => {
      if (!this.isBrowser) {
        return;
      }
      const project = this.selectedProject();

      // Snapshot scroll position before any DOM/style change tied to
      // opening/closing the modal. Defensive safety net: whatever the exact
      // browser mechanism is, if applying (or removing) `overflow: hidden`
      // causes an unwanted scroll compensation, this forcibly undoes it
      // rather than relying on fully preventing it.
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      // Lock page scroll while the detail modal is open.
      this.document.body.style.overflow = project ? 'hidden' : '';

      const restoreScroll = () => {
        if (window.scrollX !== scrollX || window.scrollY !== scrollY) {
          window.scrollTo({ left: scrollX, top: scrollY, behavior: 'instant' });
        }
      };

      // Move focus into the dialog when it opens, or back to the trigger
      // button when it closes. Deferred to a microtask so the DOM has
      // settled; the rAF-nested restoreScroll below also catches a
      // browser-internal "keep the focused element reachable" scroll
      // compensation that can land slightly later, during layout/paint.
      queueMicrotask(() => {
        if (project) {
          this.document.querySelector<HTMLElement>('.project-modal')?.focus({ preventScroll: true });
        } else if (this.lastTrigger) {
          this.lastTrigger.focus({ preventScroll: true });
          this.lastTrigger = null;
        }

        restoreScroll();
        requestAnimationFrame(() => {
          requestAnimationFrame(restoreScroll);
        });
      });
    });
  }

  openDetails(project: Project): void {
    // Blur the trigger synchronously, before the signal update below can
    // apply `overflow: hidden` to <body> while the just-clicked button is
    // still focused. On a real click, the browser focuses the button as
    // part of its default action before our (click) handler runs; if it
    // then stays focused while body becomes overflow:hidden and gets
    // visually covered by the fixed overlay, Chromium performs a "scroll
    // the focused element back into view" compensation that visibly jumps
    // the page. Dropping focus before any of that mutation happens avoids
    // ever entering that state — and is correct dialog focus handling
    // regardless, since focus moves into the modal right after anyway.
    if (this.isBrowser) {
      const active = this.document.activeElement as HTMLElement | null;
      this.lastTrigger = active && active !== this.document.body ? active : null;
      active?.blur();
    }

    this.activeImageIndex.set(0);
    this.selectedProject.set(project);
  }

  closeDetails(): void {
    this.selectedProject.set(null);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeDetails();
  }

  prevImage(): void {
    this.scrollToImage(this.activeImageIndex() - 1);
  }

  nextImage(): void {
    this.scrollToImage(this.activeImageIndex() + 1);
  }

  goToImage(index: number): void {
    this.scrollToImage(index);
  }

  /** Keeps the dots/arrows in sync when the user swipes the gallery directly. */
  onMediaScroll(event: Event): void {
    const el = event.target as HTMLElement;
    if (el.clientWidth) {
      this.activeImageIndex.set(Math.round(el.scrollLeft / el.clientWidth));
    }
  }

  private scrollToImage(index: number): void {
    const project = this.selectedProject();
    const scroller = this.mediaScroller()?.nativeElement;
    if (!project || !scroller) {
      return;
    }
    const clamped = Math.max(0, Math.min(index, project.images.length - 1));
    scroller.scrollTo({ left: clamped * scroller.clientWidth, behavior: 'smooth' });
  }
}
