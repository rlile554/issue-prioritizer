import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import Prioritizer from '../Prioritizer';

test('Prioritizer renders', () => {
	const component = renderer.create(
		<Provider store={store}>
			<Prioritizer />
		</Provider>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
