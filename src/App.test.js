import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

test('App Renders Correctly', () => {
	const component = renderer.create(
		<Provider store={store}>
			<App />
		</Provider>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
