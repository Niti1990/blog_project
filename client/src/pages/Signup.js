import React from 'react'

const Signup = () => {
	return (
		<main className='uk-flex-auto uk-section uk-flex uk-flex-row uk-flex-center'>
			<article className='uk-container uk-container-small'>
				<h1>Signup</h1>
				<form className='uk-form-stacked' action='/login' method='post'>
					<div className='uk-margin'>
						<label className='uk-form-label' htmlFor='name'>
							Name:
						</label>
						<div className='uk-form-controls uk-inline'>
							<span className='uk-form-icon' data-uk-icon='icon: user'></span>
							<input
								className='uk-input'
								type='text'
								id='name'
								name='name'
								placeholder='Name'
								autoFocus
								required
							/>
						</div>
					</div>
					<div className='uk-margin'>
						<label className='uk-form-label' htmlFor='email'>
							Email:
						</label>
						<div className='uk-form-controls uk-inline'>
							<span className='uk-form-icon' data-uk-icon='icon: mail'></span>
							<input
								className='uk-input'
								type='email'
								id='email'
								name='email'
								placeholder='Email'
								required
							/>
						</div>
					</div>
					<div className='uk-margin'>
						<label className='uk-form-label' htmlFor='password'>
							Password:
						</label>
						<div className='uk-form-controls uk-inline'>
							<span className='uk-form-icon' data-uk-icon='icon: lock'></span>
							<input
								className='uk-input'
								type='password'
								id='password'
								name='password'
								placeholder='Password'
								required
							/>
						</div>
					</div>
					<div className='uk-margin'>
						<label className='uk-form-label' htmlFor='passwordConfirmation'>
							Password Confirmation:
						</label>
						<div className='uk-form-controls uk-inline'>
							<span className='uk-form-icon' data-uk-icon='icon: lock'></span>
							<input
								className='uk-input'
								type='password'
								id='passwordConfirmation'
								name='Password Confirmation'
								placeholder='Password Confirmation'
								required
							/>
						</div>
					</div>
					<div className='uk-margin'>
						<button
							className='uk-button uk-button-primary uk-width-expand'
							type='submit'
						>
							Signup
						</button>
					</div>
				</form>
				<small>
					<span className='uk-margin-small-right'>
						Already have an Account?
					</span>
					<a className='uk-link-heading' href='/login/'>
						Login
						<span
							className='uk-margin-small-left uk-icon'
							data-uk-icon='arrow-right'
						></span>
					</a>
				</small>
			</article>
		</main>
	)
}
export default Signup
