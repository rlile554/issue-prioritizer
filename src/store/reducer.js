import {
	ADD_API_KEY,
	ADD_REPOS,
	LOADING,
	SELECT_REPO,
	ADD_ISSUES,
	REORDER_ISSUES,
} from './actionTypes';

const initialState = {
	loading: false,
	apiKey: '',
	repos: [],
	issuesList: [],
	selectedRepo: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: action.isLoading,
			};
		case ADD_API_KEY:
			return {
				...state,
				apiKey: action.apiKey,
			};
		case ADD_REPOS:
			return {
				...state,
				repos: action.repos,
				loading: false,
			};
		case SELECT_REPO:
			return {
				...state,
				selectedRepo: action.repoId,
			};
		case ADD_ISSUES:
			const idx = state.issuesList.findIndex((i) => i.id === action.repoId);
			const issuesToAdd = { id: action.repoId, issues: action.issues};
			let newIssues;
			if (idx !== -1) {
				newIssues = [
					...state.issuesList.slice(0, idx),
					issuesToAdd,
					...state.issuesList.slice(idx + 1, state.issuesList.length),
				];
			} else {
				newIssues = [...state.issuesList, issuesToAdd];
			}
			return {
				...state,
				issuesList: newIssues,
			};
		case REORDER_ISSUES:
			const { sourceIndex, destinationIndex, repoId } = action;
			const returnArray = state.issuesList.map((issuesObject) => {
				if (issuesObject.id === repoId) {
					const newIssues = issuesObject.issues.slice();
					const issueToMove = newIssues.splice(sourceIndex, 1)[0];
					newIssues.splice(destinationIndex, 0, issueToMove);
					return {
						...issuesObject,
						issues: newIssues
					};
				}
				return issuesObject;
			});
			return {
				...state,
				issuesList: returnArray,
			};
		default:
			return state;
	}
};

export default reducer;
