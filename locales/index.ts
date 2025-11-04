import { en } from './en';
import { tr } from './tr';
import { fa } from './fa';

export const translations = {
  en,
  tr,
  fa,
};

export type Language = keyof typeof translations;
