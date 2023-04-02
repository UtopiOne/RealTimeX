<script lang="ts">
	import '@skeletonlabs/skeleton/styles/all.css';
	import moment from 'moment';
	import type { PageData } from './$types';

	export let data: PageData;

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

<div class="flex flex-col m-5 items-center">
	{#each [...data.messages].reverse() as msg, i (msg.id)}
		<div class="card card-hover w-full lg:w-1/3 mb-5">
			<p class="card-header">{msg.contents}</p>
			<p class="card-footer mt-3">by {msg.author} {formatDate(msg.time)}</p>
		</div>
	{/each}

	<form method="POST" class="flex flex-col">
		<textarea
			class="textarea resize-none w-96"
			placeholder="Enter your message"
			rows="4"
			name="message"
		/>
		<button class="btn variant-filled-primary mt-5 w-1/3" type="submit">Submit</button>
	</form>
</div>
