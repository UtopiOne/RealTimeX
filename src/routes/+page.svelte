<script lang="ts">
	import '@skeletonlabs/skeleton/styles/all.css';
	import moment from 'moment';
	import type { PageData } from './$types';

	export let data: PageData;
	let messages = data.data.data;

	export const formatDate = (dateString: string): string => {
		const date = moment(dateString, 'YYYYMMDDHHmmss');

		if (moment().isSame(date, 'day')) {
			return moment.duration(date.diff(moment(), 'milliseconds')).humanize(true);
		} else {
			return date.format('YYYY/MM/DD');
		}
	};
</script>

<div class="flex flex-col m-5 items-center">
	{#each messages as message, i (message.id)}
		<div class="card card-hover w-1/3 mb-5">
			<p class="card-header">{message.contents}</p>
			<p class="card-footer mt-3">by {message.author} at {formatDate(message.time)}</p>
		</div>
	{/each}
	<form class="flex flex-col">
		<textarea class="textarea resize-none w-96" rows="4" placeholder="Enter your message" />
		<button class="btn variant-filled-primary mt-5 w-1/3">Submit</button>
	</form>
</div>
