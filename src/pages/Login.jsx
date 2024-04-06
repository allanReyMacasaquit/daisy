import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components/form';

const Login = () => {
	return (
		<section className='h-screen grid place-items-center'>
			<Form
				method='post'
				className='card w-96 p-8 bg-base-300 shadow-lg flex flex-col gap-y-4'
			>
				<h4 className='text-center text-3xl font-semibold'>Login</h4>
				<FormInput
					type='email'
					label='email'
					name='identifier'
					defaultValue='test@test.com'
				/>
				<FormInput
					type='password'
					label='password'
					name='password'
					defaultValue='secret'
				/>
				<div className='mt-4'>
					<SubmitBtn text='login' />
				</div>
				<button type='button' className='btn btn-outline btn-block capitalize'>
					guest user
				</button>
				<p className='text-center'>
					Not yet a member?
					<Link to='/register'>
						<span className='hover:bg-base-100 px-2 rounded-md ml-1'>
							Register
						</span>
					</Link>
				</p>
			</Form>
		</section>
	);
};
export default Login;
