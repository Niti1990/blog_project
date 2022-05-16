import React from 'react'

const Login = () => {
	return (
		<main class='uk-flex uk-flex-center'>
			<article>
				<h1>Login</h1>
				<form class='uk-form-stacked' action='/register' method='post'>
					<div class='uk-margin'>
						<label class='uk-form-label' for='name'>
							Name:
						</label>
						<div class='uk-form-controls uk-inline'>
							<span class='uk-form-icon' data-uk-icon='icon: user'></span>
							<input
								class='uk-input'
								type='text'
								id='name'
								name='name'
								placeholder='Name'
								autofocus
								required
							/>
						</div>
					</div>
					<div class='uk-margin'>
						<label class='uk-form-label' for='email'>
							Email:
						</label>
						<div class='uk-form-controls uk-inline'>
							<span class='uk-form-icon' data-uk-icon='icon: mail'></span>
							<input
								class='uk-input'
								type='email'
								id='email'
								name='email'
								placeholder='Email'
								required
							/>
						</div>
					</div>
					<div class='uk-margin'>
						<label class='uk-form-label' for='password'>
							Password:
						</label>
						<div class='uk-form-controls uk-inline'>
							<span class='uk-form-icon' data-uk-icon='icon: lock'></span>
							<input
								class='uk-input'
								type='password'
								id='password'
								name='password'
								placeholder='Password'
								required
							/>
						</div>
					</div>
					<div class='uk-margin'>
						<button
							class='uk-button uk-button-primary uk-width-expand'
							type='submit'
						>
							Login
						</button>
					</div>
				</form>
				<p>
					<a class='uk-link-heading' href='/register'>
						Register
						<span
							class='uk-margin-small-left uk-icon'
							data-uk-icon='arrow-right'
						></span>
					</a>
				</p>
			</article>
		</main>
	)
}

export default Login
