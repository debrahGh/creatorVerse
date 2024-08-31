import { createClient } from '@supabase/supabase-js';

const URL = 'your-supabase-project-url';
const API_KEY = 'your-supabase-api-key';

export const supabase = createClient(URL, API_KEY);
