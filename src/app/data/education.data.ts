export interface EducationEntry {
  id: string;
  organization: string;
  /** ISO format YYYY-MM */
  startDate: string;
  /** ISO format YYYY-MM, or null if ongoing */
  endDate: string | null;
  titleKey: string;
  descriptionKey?: string;
}

export const EDUCATION: EducationEntry[] = [
  {
    id: 'english-a1-a2',
    organization: 'UCLouvain',
    startDate: '2024-10',
    endDate: '2024-12',
    titleKey: 'education.englishA1A2.title',
  },
  {
    id: 'ddd',
    organization: 'UCLouvain',
    startDate: '2023-01',
    endDate: '2023-01',
    titleKey: 'education.ddd.title',
  },
  {
    id: 'python-django-training',
    organization: 'Makina Corpus',
    startDate: '2022-11',
    endDate: '2022-11',
    titleKey: 'education.pythonDjango.title',
  },
  {
    id: 'bachelor-it',
    organization: 'HELHa Mons',
    startDate: '2019-09',
    endDate: '2022-06',
    titleKey: 'education.bachelorIt.title',
    descriptionKey: 'education.bachelorIt.description',
  },
  {
    id: 'cess-agronomy',
    organization: 'Centre Éducatif Saint-Pierre (Leuze)',
    startDate: '2013-09',
    endDate: '2019-06',
    titleKey: 'education.cessAgronomy.title',
    descriptionKey: 'education.cessAgronomy.description',
  },
];
