import formatDistance from 'date-fns/formatDistance';

export const relativeDate = (date: string) => {
  console.log('date:', date);
  const ticker = useTicker();
  return formatDistance(new Date(date), ticker.value);
};