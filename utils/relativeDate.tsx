import { intlFormatDistance } from 'date-fns';

export const relativeDate = (date: number | Date): string => {
  return intlFormatDistance(date, new Date());
};
