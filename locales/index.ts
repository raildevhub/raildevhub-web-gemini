import { en } from './en';
import { tr } from './tr';
import { fa } from './fa';
import { zh } from './zh';

export const translations = {
  en,
  tr,
  fa,
  zh,
};

export type Language = keyof typeof translations;
