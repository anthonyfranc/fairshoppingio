export const useTicker = () =>
  useState<any>('ticker', () => new Date().getTime());

setInterval(function () {
  
}, 1000);
