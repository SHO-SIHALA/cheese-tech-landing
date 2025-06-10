
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables. Please check your environment configuration.');
  // Create a dummy client to prevent app crash during development
  export const supabase = createClient('https://placeholder.supabase.co', 'placeholder-key');
} else {
  export const supabase = createClient(supabaseUrl, supabaseKey);
}
