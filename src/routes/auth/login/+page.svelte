<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';

	export let data: PageData;

	const { form, errors, enhance, constraints } = superForm(data.form);
</script>

<section class="flex flex-col place-items-center place-content-center h-full">
	<h1>Login</h1>

	<form class="m-3 w-full md:w-1/3" method="post" use:enhance>
		<div class="py-2">
			<label for="mail"><span>E-mail</span></label>
			<input
				class="input"
				name="mail"
				type="email"
				bind:value={$form.mail}
				{...$constraints.mail}
			/>
			{#if $errors.mail}
				<small>{$errors.mail}</small>
			{/if}
		</div>
		<div class="py-2">
			<label for="password"><span>Password</span></label>
			<input
				class="input"
				name="password"
				type="password"
				bind:value={$form.password}
				{...$constraints.password}
			/>
			{#if $errors.password}
				<small>{$errors.password}</small>
			{/if}
		</div>

		<button class="btn variant-filled-primary mt-4 w-1/3" type="submit">Log in</button>
		<p class="mt-5 text-center w-1/3">Not logged in? <a href="./register">Register</a></p>
	</form>
</section>
