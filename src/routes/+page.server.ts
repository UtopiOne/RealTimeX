import supabaseClient from '$lib/db/supabaseClient';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import type { Actions, PageServerLoad } from './$types';

const messageSchema = z.object({
	message: z.string().min(1)
});

export const load = (async (event) => {
	const form = await superValidate(event, messageSchema);
	const messages = await supabaseClient
		.from('messages')
		.select()
		.order('time', { ascending: false })
		.range(0, 4);

	return {
		form,
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
