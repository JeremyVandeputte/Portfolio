import { Component } from '@angular/core';

import { Intro } from '../../components/intro/intro';
import { About } from '../../components/about/about';
import { Experience } from '../../components/experience/experience';
import { Skills } from '../../components/skills/skills';
import { Projects } from '../../components/projects/projects';
import { Contact } from '../../components/contact/contact';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-portfolio-page',
  imports: [Intro, About, Experience, Skills, Projects, Contact, Footer],
  templateUrl: './portfolio-page.html',
})
export class PortfolioPage {}
