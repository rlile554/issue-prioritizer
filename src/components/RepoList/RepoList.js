import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './RepoList.scss';
import { getRepos } from '../../utils/GitHubApi';
import { addRepos, selectRepo } from '../../store/actions';

const RepoList = () => {
	const dispatch = useDispatch();
	const key = useSelector((state) => state.apiKey);
	const selectedRepo = useSelector((state) => state.selectedRepo);

	useEffect(() => {
		getRepos(key)
			.then((res) => {
				dispatch(addRepos(res));
			})
			.catch((e) => {
				// TODO: catch error
			});
	}, [key, dispatch]);

	const selectRepoWithId = (id) => {
		dispatch(selectRepo(id));
	};

	const repos = useSelector((state) => state.repos);
	const repoList = repos.map((r) => {
		return (
			<div
				className={`repo ${r.id === selectedRepo ? 'selected' : ''}`}
				key={r.id}
				onClick={() => selectRepoWithId(r.id)}
			>
				{r.name}
			</div>
		);
	});

	return (
		<>
			{!!repoList.length ? (
				<div className='repoDiv'>{repoList}</div>
			) : (
				<p>Loading</p>
			)}
		</>
	);
};

export default RepoList;
