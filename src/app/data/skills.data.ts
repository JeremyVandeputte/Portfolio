export interface SkillItem {
  label: string;
  /** When set, the item is displayed via this i18n key instead of the raw label. */
  translationKey?: string;
}

export interface SkillCategory {
  id: string;
  titleKey: string;
  items: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    titleKey: 'skills.categories.languages',
    items: [
      { label: 'Python' },
      { label: 'JavaScript' },
      { label: 'TypeScript' },
      { label: 'Java' },
      { label: 'C#' },
      { label: 'C++' },
      { label: 'C' },
      { label: 'PHP' },
    ],
  },
  {
    id: 'frameworks',
    titleKey: 'skills.categories.frameworks',
    items: [
      { label: 'Django' },
      { label: 'Angular' },
      { label: 'React Native' },
      { label: '.NET' },
    ],
  },
  {
    id: 'databases',
    titleKey: 'skills.categories.databases',
    items: [
      { label: 'PostgreSQL' },
      { label: 'MySQL' },
      { label: 'SQLite' },
      { label: 'Oracle Database' },
      { label: 'MS SQL Server' },
    ],
  },
  {
    id: 'frontend',
    titleKey: 'skills.categories.frontend',
    items: [{ label: 'HTMX' }, { label: 'jQuery' }],
  },
  {
    id: 'tools',
    titleKey: 'skills.categories.tools',
    items: [{ label: 'Git' }, { label: 'Jenkins' }],
  },
  {
    id: 'concepts',
    titleKey: 'skills.categories.concepts',
    items: [
      { label: 'Domain Driven Design' },
      { label: 'REST API' },
      { label: 'Design Patterns' },
    ],
  },
  {
    id: 'methodologies',
    titleKey: 'skills.categories.methodologies',
    items: [{ label: 'Agile' }, { label: 'Scrum' }],
  },
  {
    id: 'os',
    titleKey: 'skills.categories.os',
    items: [{ label: 'Linux' }, { label: 'Windows' }],
  },
  {
    id: 'languages-spoken',
    titleKey: 'skills.categories.languagesSpoken',
    items: [
      { label: 'Français', translationKey: 'skills.languagesSpoken.french' },
      { label: 'Anglais', translationKey: 'skills.languagesSpoken.english' },
    ],
  },
];
