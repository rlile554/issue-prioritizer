import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import './index.scss';
import App from './App';
import { store, persistor } from './store/store';

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={<p>Loading</p>} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
