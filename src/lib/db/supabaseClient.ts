import { env } from '$env/dynamic/public';
import { createClient } from '@supabase/supabase-js';

export default createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY);
