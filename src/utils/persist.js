export const persistPriority = (repoId, priority) => {
	try{
		localStorage.setItem(repoId, JSON.stringify(priority));
	} catch(e) {
		throw new Error('Local storage is not supported. Priority will not be persisted');
	}
}

export const getPersistedPriority = (repoId) => {
	try{
		return localStorage.getItem(repoId);
	} catch (e) {
		throw new Error('Local storage is not supported. Unable to obtain persisted priority')
	}
}