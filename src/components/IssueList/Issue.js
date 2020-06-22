import React from 'react';
import './Issue.scss';
import { getTextTimeframe } from '../../utils/DateUtils';

const UnAssignedAvatar = () => <div className="unassigned"></div>;

const Issue = ({ title, avatar_url, created, updated }) => {
	const created_date = new Date(created).toLocaleDateString();
	const updated_text = getTextTimeframe(new Date(updated), Date.now());
	return (
		<div className='issue'>
			{avatar_url ? (
				<img
					className='avatar'
					src={avatar_url}
					alt='user avatar'
					width='40'
					height='40'
				/>
			) : (
				<UnAssignedAvatar />
			)}
			<div className='issueTitle'>{title}</div>
			<div>
				<div className='created'>created: {created_date}</div>
				<div className='updated'>updated: {updated_text}</div>
			</div>
		</div>
	);
};

export default Issue;
