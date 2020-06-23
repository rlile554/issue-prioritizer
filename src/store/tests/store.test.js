import { createStore } from 'redux';
import reducer from '../reducer';
import { addApiKey, loading, addRepos, selectRepo, addIssues, reorderIssues } from '../actions';

describe('store', () => {
	let store;

	beforeEach(() => {
		store = createStore(reducer);
	});

	afterEach(() => {
		store = null;
	});

	test('Stores key', () => {
		store.dispatch(addApiKey('testKey'));
		expect(store.getState().apiKey).toEqual('testKey');
	});

	test('Toggles Loading', () => {
		expect(store.getState().loading).toEqual(false);
		store.dispatch(loading(true));
		expect(store.getState().loading).toEqual(true);
		store.dispatch(loading(false));
		expect(store.getState().loading).toEqual(false);
	});

	test('Stores Repos', () => {
		const repos = [{ id: 1, full_name: 'test repo' }];
		store.dispatch(addRepos(repos));
		expect(store.getState().repos).toEqual(repos);
	});

	test('Stores selected repo', () => {
		store.dispatch(selectRepo(1));
		expect(store.getState().selectedRepo).toEqual(1);
		store.dispatch(selectRepo(2));
		expect(store.getState().selectedRepo).toEqual(2);
	});

	test('Stores Issues', () => {
		const issues = [{id:1}, { id: 2}, {id: 3}]
		store.dispatch(addIssues(issues, 1));
		expect(store.getState().issuesList).toEqual([{id: 1, issues}]);
	});

	test('Reorders Issues', () => {
		const issues = [{id:1}, { id: 2}, {id: 3}];
		store.dispatch(addIssues(issues, 1));
		store.dispatch(reorderIssues(1, 2, 0));
		expect(store.getState().issuesList[0].issues).toEqual([{id: 3}, {id: 1}, {id: 2}]);
	})
});
