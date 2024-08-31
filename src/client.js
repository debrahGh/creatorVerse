import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://crvsbrzikbkhvwibojxf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNydnNicnppa2JraHZ3aWJvanhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2NDA4MDMsImV4cCI6MjA0MDIxNjgwM30.pZPHM2-7NBzvtyjTqnXRKMuB-SDfz5tPjuSFTVEecRY';
export const supabase = createClient(supabaseUrl, supabaseKey);
