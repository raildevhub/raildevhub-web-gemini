import { en } from './en';
import { tr } from './tr';

export const translations = {
  en,
  tr,
};

export type Language = keyof typeof translations;
