<h1>Register</h1>

<form class="flex flex-col m-3 w-full lg:w-1/3" method="post">
	<label for="username"><span>Username</span></label>
	<input class="input" type="text" name="username" />

	<label for="mail"><span>E-mail</span></label>
	<input class="input" name="mail" type="email" />

	<label for="password"><span>Password</span></label>
	<input class="input" name="password" type="password" minlength="6" />

	<button class="btn variant-filled-primary mt-4 w-1/2" type="submit">Create Account</button>
</form>
