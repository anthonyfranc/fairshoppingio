export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.name == 'p-:id') {
    //we need to check if product slug name exist.
    const supabase = useSupabaseClient();
    const { data, count } = await supabase
      .from('productinfo1')
      .select('*', { count: 'exact' })
      .eq('slug', to.params.id);
    if (count < 1) {
      //this :id does not exist within our database we need to route them back
      return navigateTo('/');
    }
  }
});
