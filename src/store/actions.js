import {
	ADD_API_KEY,
	ADD_REPOS,
	LOADING,
	SELECT_REPO,
	ADD_ISSUES,
	REORDER_ISSUES,
} from './actionTypes';

export const addApiKey = (apiKey) => {
	return {
		type: ADD_API_KEY,
		apiKey,
	};
};

export const addRepos = (repos) => {
	return {
		type: ADD_REPOS,
		repos,
	};
};

export const selectRepo = (repoId) => {
	return {
		type: SELECT_REPO,
		repoId,
	};
};

export const addIssues = (issues, repoId) => {
	return {
		type: ADD_ISSUES,
		issues,
		repoId,
	};
};

export const reorderIssues = (repoId, sourceIndex, destinationIndex) => {
	return {
		type: REORDER_ISSUES,
		repoId,
		sourceIndex,
		destinationIndex
	}
}

export const loading = (isLoading) => {
	return {
		type: LOADING,
		isLoading,
	};
};
