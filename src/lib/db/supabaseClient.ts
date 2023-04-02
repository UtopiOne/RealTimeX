import { env } from '$env/dynamic/private';
import { createClient } from '@supabase/supabase-js';

export default createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
