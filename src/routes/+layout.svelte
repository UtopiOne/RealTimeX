<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import { AppBar, AppShell, Avatar, LightSwitch } from '@skeletonlabs/skeleton';
	import '../app.postcss';

	let loggedIn = true;
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a class="text-xl" href="/">RealTimeX</a>
				<a href="https://github.com/UtopiOne/RealTimeX" class="ml-5"
					><svg class="h-7 w-7 dark:fill-white fill-black">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
								d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
							/>
						</svg>
					</svg></a
				>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch size="sm" />
				{#if loggedIn}
					<Avatar width="w-10" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
				{:else}
					<a href="/auth/login">Log in</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
</AppShell>
