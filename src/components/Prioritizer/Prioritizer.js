import React from 'react';
import { useSelector } from 'react-redux';
import './Prioritizer.scss';
import RepoList from '../RepoList/RepoList';
import IssueList from '../IssueList/IssueList';

const Prioritizer = () => {
	const hasSelectedRepo = useSelector((state) => !!state.selectedRepo);
	return (
		<div className='Content'>
			<RepoList />
			{hasSelectedRepo && <IssueList />}
		</div>
	);
};

export default Prioritizer;
