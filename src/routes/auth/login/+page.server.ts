import { supabase } from '$lib/db/supabaseClient';
import { fail, type RequestEvent } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import type { Actions } from './$types';

const loginSchema = z.object({
	mail: z.string().email(),
	password: z.string().min(6)
});

export const load = async (
	event:
		| RequestEvent<Partial<Record<string, string>>, string | null>
		| Request
		| FormData
		| Partial<{ mail: string; password: string }>
		| null
		| undefined
) => {
	const form = await superValidate(event, loginSchema);

	return {
		form
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, loginSchema);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		let { data, error } = await supabase.auth.signInWithPassword({
			email: form.data.mail,
			password: form.data.password
		});
	}
} satisfies Actions;
