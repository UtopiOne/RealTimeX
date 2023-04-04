import supabaseClient from '$lib/db/supabaseClient';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);

		let { data, error } = await supabaseClient.auth.signInWithPassword({
			email: formData.get('mail'),
			password: formData.get('password')
		});
	}
} satisfies Actions;
