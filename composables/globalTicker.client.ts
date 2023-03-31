export default defineNuxtPlugin(nuxtApp => {

  // updating a global ticker in useState that can be used to auto-update times in the UI

  const ticker = useTicker()
  
  const TICKER_INTERVAL = 30000; // milliseconds

  setInterval(() => {
    let newVal = new Date().getTime();
    ticker.value = newVal
  }, TICKER_INTERVAL);
  
})