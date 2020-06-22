import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Login.scss';
import { addApiKey, loading } from '../../store/actions';
import { validateToken } from '../../utils/GitHubApi';

const Login = () => {
	const dispatch = useDispatch();
	const storedKey = useSelector((state) => (state.apiKey ? state.apiKey : ''));
	const [key, setKey] = useState(storedKey);
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		setKey(e.target.value);
		setError(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(loading(true));

		try{
			await validateToken(key);
			dispatch(addApiKey(key));
			dispatch(loading(false));
		} catch(e) {
			setError(e.message)
		}
	};

	return (
		<div>
			<form className='keyForm' onSubmit={handleSubmit}>
				<h1 className='title'>Please enter your GitHub API key</h1>
				<input
					className='keyInput'
					placeholder='...'
					value={key}
					onChange={handleChange}
				/>
				{error && (
					<p className='error'>Invalid api key. Please insert a valid key</p>
				)}
				<button className='submitBtn' type='submit'>
					submit
				</button>
			</form>
		</div>
	);
};

export default Login;
