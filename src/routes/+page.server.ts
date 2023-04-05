import { supabase } from '$lib/db/supabaseClient';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

import type { Actions, PageServerLoad } from './$types';

const messageSchema = z.object({
	message: z.string().min(1)
});

export const load = (async (event) => {
	const form = await superValidate(event, messageSchema);
	const messages = await supabase
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
	default: async (event) => {
		const form = await superValidate(event, messageSchema);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { data, error } = await supabase
			.from('messages')
			.insert([{ contents: form.data.message, author: 'testUser' }]);
	}
} satisfies Actions;
