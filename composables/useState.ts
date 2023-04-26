export const useTicker = () =>
  useState<any>('ticker', () => new Date().getTime());

  