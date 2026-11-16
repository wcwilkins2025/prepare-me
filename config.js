/* Prepare Me: where signed-in men's rows are kept.
   Both values are made to be public; the row rules in supabase/schema.sql are what keep each man's rows his own.
   The secret key never goes in this file or anywhere in this repo.
   Left empty, the site runs as a local preview on localhost only (rows kept in that browser). */
window.RD_CONFIG = {
  supabaseUrl: '',
  supabaseKey: ''
};
