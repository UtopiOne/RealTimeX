<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import { AppBar, AppShell, Avatar, LightSwitch } from '@skeletonlabs/skeleton';
	import '../app.postcss';

	let loggedIn = false;
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a class="text-xl" href="/">RealTimeX</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch size="sm" />
				{#if loggedIn}
					<Avatar width="w-10" src="https://i.pravatar.cc/100" />
				{:else}
					<a href="/login">Log in</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
</AppShell>
