import supabaseClient from '$lib/db/supabaseClient';

import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const messages = await supabaseClient
		.from('messages')
		.select()
		.order('time', { ascending: false })
		.range(0, 4);

	return {
		messages: messages.data
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		if (formData.get('message')) {
			const { data, error } = await supabaseClient
				.from('messages')
				.insert([{ contents: formData.get('message'), author: 'Another-User' }]);
		}
	}
} satisfies Actions;
