<section class="flex flex-col place-items-center place-content-center h-full">
	<h1>Register</h1>

	<form class="m-3 w-full lg:w-1/3" method="post">
		<div class="py-2">
			<label for="username"><span>Username</span></label>
			<input class="input" type="text" name="username" />
		</div>

		<div class="py-2">
			<label for="mail"><span>E-mail</span></label>
			<input class="input" name="mail" type="email" />
		</div>
		<div class="py-2">
			<label for="password"><span>Password</span></label>
			<input class="input" name="password" type="password" minlength="6" />
		</div>
		<button class="btn variant-filled-primary mt-4 w-1/2" type="submit">Create Account</button>
	</form>
</section>
