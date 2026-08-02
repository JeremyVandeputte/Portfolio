export interface ExperienceEntry {
  id: string;
  organization: string;
  location?: string;
  /** ISO format YYYY-MM */
  startDate: string;
  /** ISO format YYYY-MM, or null if ongoing */
  endDate: string | null;
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
}

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: 'uclouvain',
    organization: 'Université Catholique de Louvain',
    location: 'Louvain-la-Neuve, Belgique',
    startDate: '2022-10',
    endDate: null,
    titleKey: 'experience.uclouvain.title',
    descriptionKey: 'experience.uclouvain.description',
    technologies: ['Python', 'Django', 'HTMX', 'PostgreSQL', 'REST API'],
  },
  {
    id: 'chwapi',
    organization: 'CHwapi',
    location: 'Tournai, Belgique',
    startDate: '2022-02',
    endDate: '2022-05',
    titleKey: 'experience.chwapi.title',
    descriptionKey: 'experience.chwapi.description',
    technologies: ['React Native'],
  },
];
