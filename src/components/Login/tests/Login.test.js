import React from 'react';
import Login from '../Login';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

test('Login renders', () => {
	const component = renderer.create(
		<Provider store={store}>
			<Login />
		</Provider>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
