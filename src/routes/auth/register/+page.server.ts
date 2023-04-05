import { supabase } from '$lib/db/supabaseClient';
import { fail, type RequestEvent } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import type { Actions } from './$types';

const registerSchema = z.object({
	username: z.string().min(1),
	mail: z.string().email(),
	password: z.string().min(6)
});

export const load = async (
	event:
		| RequestEvent<Partial<Record<string, string>>, string | null>
		| Request
		| FormData
		| Partial<{ username: string; mail: string; password: string }>
		| null
		| undefined
) => {
	const form = await superValidate(event, registerSchema);

	return {
		form
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, registerSchema);
		console.log(form);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		let { data, error } = await supabase.auth.signUp({
			email: form.data.mail,
			password: form.data.password
		});
	}
} satisfies Actions;
