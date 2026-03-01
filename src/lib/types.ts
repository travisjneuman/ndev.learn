export interface CourseStats {
  projects: number;
  levels: number;
  modules: number;
  conceptGuides?: number;
}

export type CourseStatus = 'active' | 'coming-soon';

export interface CourseData {
  title: string;
  subtitle: string;
  status: CourseStatus;
  url: string;
  github: string;
  icon: string;
  color: string;
  stats: CourseStats;
  tags: string[];
  order: number;
}
