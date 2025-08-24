
import type { ReactNode } from 'react';

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Project {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
}
