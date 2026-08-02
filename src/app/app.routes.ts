import { Routes } from '@angular/router';
import { PortfolioPage } from './pages/portfolio-page/portfolio-page';
import { CvPage } from './pages/cv-page/cv-page';

export const routes: Routes = [
  { path: '', component: PortfolioPage, title: 'Jérémy Vandeputte — Portfolio' },
  { path: 'cv', component: CvPage, title: 'Jérémy Vandeputte — CV' },
  { path: '**', redirectTo: '' },
];
