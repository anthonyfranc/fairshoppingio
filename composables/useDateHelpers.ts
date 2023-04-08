import { formatDistance } from 'date-fns';

export const relativeDate = (date: string) => {
  const ticker = useTicker();
  console.log('date:', date);
  return formatDistance(new Date(date), ticker.value);
};
