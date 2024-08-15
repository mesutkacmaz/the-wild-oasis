import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zpkafrotgjhhkrzcfvik.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpwa2Fmcm90Z2poaGtyemNmdmlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzNzIxNzgsImV4cCI6MjAxNjk0ODE3OH0.xnpzpAY3RF--hS8mujXqgSGpSGIjPaSjY7UbDN1ZN3M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
