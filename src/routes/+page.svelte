<script lang="ts">
	import { supabase } from '$lib/db/supabaseClient';
	import { messagesStore } from '$lib/stores/messagesStore';
	import '@skeletonlabs/skeleton/styles/all.css';
	import moment from 'moment';
	import { fly } from 'svelte/transition';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';

	export let data: PageData;

	messagesStore.set(data.messages);
	$: messages = $messagesStore;

	const { form, errors, enhance, constraints } = superForm(data.form);

	const posts = supabase
		.channel('custom-all-channel')
		.on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, (payload) => {
			if ($messagesStore.length > 4) {
				$messagesStore.pop();
				$messagesStore = $messagesStore;
			}
			$messagesStore = [payload.new, ...$messagesStore];
		})
		.subscribe();

	export const formatDate = (dateString: string): string => {
		const date = moment(dateString, 'YYYYMMDDHHmmss');

		if (moment().isSame(date, 'day')) {
			return moment.duration(date.diff(moment(), 'milliseconds')).humanize(true);
		} else {
			return date.format('YYYY/MM/DD');
		}
	};
</script>

<svelte:head>
	<title>RealTimeX</title>
	<meta name="RealTimeX" content="Welcome to RealTimeX" />
</svelte:head>

<div class="flex flex-col my-5 items-center">
	<section class=" w-full lg:w-1/3 space-y-4">
		{#each [...messages].reverse() as msg, i (msg.id)}
			<div class="card card-hover mb-5" in:fly={{ x: -100, duration: 100 }}>
				<p class="card-header">{msg.contents}</p>
				<p class="card-footer mt-3">by {msg.author} {formatDate(msg.time)}</p>
			</div>
		{/each}
	</section>

	<form method="POST" class="flex flex-col mt-5" use:enhance>
		<input
			placeholder="Your username"
			class="input w-96 p-2 mb-2"
			name="username"
			bind:value={$form.username}
			{...$constraints.username}
		/>
		<textarea
			class="textarea resize-none w-96"
			placeholder="Enter your message"
			rows="4"
			name="message"
			bind:value={$form.message}
			{...$constraints.message}
		/>
		<button class="btn variant-filled-primary mt-5 w-1/3" type="submit">Submit</button>
	</form>
</div>
