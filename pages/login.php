<!DOCTYPE html>
<html lang="en">
<head>
    <?php require 'includes/head.html'; ?>
</head>
<body>

<nav class="nav-extended">
		<?php require 'includes/navbar.html'; ?>
	<div class="nav-content">
		<ul class="tabs tabs-transparent">
			<li class="tab"><a href="#signin">sign in</a></li>
			<li class="tab"><a href="#signup" class="active">sign up</a></li>
		</ul>
	</div>
</nav>

<br>

<div class="row">

	<div class="col s0 m2 l3"></div>

	<form id="signin" class="col s12 m8 l6">
		<div class="container">
			<div class="card">
				<div class="card-content">
					<div class="input-field">
						<i class="material-icons prefix">account_circle</i>
						<input id="username" type="text" class="validate">
						<label for="username">Username</label>
					</div>
					<div class="input-field">
						<i class="material-icons prefix">lock_open</i>
						<input id="password" type="password" class="validate">
						<label for="password">Password</label>
					</div>
					<div class="left-align">
						<input type="checkbox" class="filled-in" id="remember-me" />
						<label for="remember-me">Remember me</label>
					</div>
				</div>
				<div class="card-action right-align">
					<a href="#" id="forgot">Forgot password?</a>
					<button class="btn waves-effect waves-teal" type="submit" name="signin">
						Log in
					</button>
				</div>
			</div>
		</div>
	</form>

	<form id="signup" class="col s12 m8 l6">
		<div class="container">
			<div class="card">
				<div class="card-content">
					<div class="input-field">
						<i class="material-icons prefix">account_circle</i>
						<input id="username" type="text" class="validate">
						<label for="username">Username</label>
					</div>
					<div class="input-field">
						<i class="material-icons prefix">email</i>
						<input id="email" type="email" class="validate">
						<label for="email">Email</label>
					</div>
					<div class="input-field">
						<i class="material-icons prefix">lock_outline</i>
						<input id="password" type="password" class="validate">
						<label for="password">Password</label>
					</div>
					<div class="input-field">
						<i class="material-icons prefix">lock_open</i>
						<input id="confirm_password" type="password" class="validate">
						<label for="confirm_password">Confirm password</label>
					</div>
				</div>
				<div class="card-action right-align">
					<button class="btn waves-effect waves-teal" type="submit" name="signup">
						Sign up
					</button>
				</div>
			</div>
		</div>
	</form>

	<div class="col s0 m2 l3"></div>

</div>

    <?php require 'includes/script.html'; ?>

</body>
</html>