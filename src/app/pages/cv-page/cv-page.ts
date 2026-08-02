import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

const CV_PATH = 'assets/cv.pdf';

@Component({
  selector: 'app-cv-page',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.css',
})
export class CvPage {
  protected readonly cvPath = CV_PATH;

  printCv(): void {
    window.open(CV_PATH, '_blank', 'noopener');
  }
}
