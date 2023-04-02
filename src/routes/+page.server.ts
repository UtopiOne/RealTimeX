import supabaseClient from '$lib/db/supabaseClient';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		data: await supabaseClient.from('messages').select()
	};
}) satisfies PageServerLoad;
