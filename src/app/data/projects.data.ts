export type ProjectStatus = 'online' | 'in-progress';

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  /** i18n key for the longer description shown in the project detail modal. */
  detailDescriptionKey: string;
  technologies: string[];
  status: ProjectStatus;
  /** Optional i18n key for a short technique/approach note. */
  techniqueKey?: string;
  link?: string;
  /**
   * Paths to screenshots/illustrations for the detail modal; shows a
   * placeholder until populated. Drop files into
   * `src/assets/images/projects/<id>/` and list them here, e.g.
   * `'assets/images/projects/elia-imbalance-price/1.jpg'`.
   */
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'elia-imbalance-price',
    titleKey: 'projects.elia.title',
    descriptionKey: 'projects.elia.description',
    detailDescriptionKey: 'projects.elia.detail',
    technologies: ['Python', 'Django', 'Plotly', 'PostgreSQL', 'cron', 'tenacity'],
    status: 'online',
    images: ['assets/images/projects/elia-imbalance-price/global_page_1.png', 'assets/images/projects/elia-imbalance-price/global_page_2.png'],
  },
  {
    id: 'portfolio',
    titleKey: 'projects.portfolio.title',
    descriptionKey: 'projects.portfolio.description',
    detailDescriptionKey: 'projects.portfolio.detail',
    technologies: ['Angular'],
    status: 'online',
    techniqueKey: 'projects.portfolio.technique',
    link: 'https://www.jeremyvandeputte.be',
    images: [],
  },
  {
    id: 'justgaming',
    titleKey: 'projects.justgaming.title',
    descriptionKey: 'projects.justgaming.description',
    detailDescriptionKey: 'projects.justgaming.detail',
    technologies: ['Python', 'Django', 'HTMX', 'SQLite', 'Jenkins', 'Pylint'],
    status: 'in-progress',
    images: ['assets/images/projects/justgaming/home.png', 'assets/images/projects/justgaming/my_account.png', 'assets/images/projects/justgaming/create_new_game_request.png', 'assets/images/projects/justgaming/tests_pr.png', 'assets/images/projects/justgaming/jenkins.png'],
  },
  {
    id: 'fsm-farm-manager',
    titleKey: 'projects.fsm.title',
    descriptionKey: 'projects.fsm.description',
    detailDescriptionKey: 'projects.fsm.detail',
    technologies: ['Python', 'Django', 'SQLite'],
    status: 'in-progress',
    images: [],
  },
];
