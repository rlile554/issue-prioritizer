import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getIssuesForRepo } from '../../utils/GitHubApi';
import { addIssues, reorderIssues } from '../../store/actions';
import Issue from './Issue';
import './IssueList.scss';

const IssueList = () => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const key = useSelector((state) => state.apiKey);

	const selectedRepo = useSelector((state) => {
		return state.repos.find((r) => {
			return r.id === state.selectedRepo;
		});
	});

	useEffect(() => {
		if (selectedRepo != null) {
			setLoading(true);
			getIssuesForRepo(selectedRepo.full_name, key).then((data) => {
				dispatch(addIssues(data, selectedRepo.id));
				setLoading(false);
			});
		}
	}, [selectedRepo, key, dispatch]);

	const issues = useSelector((state) => {
		return state.issuesList.find((i) => i.id === state.selectedRepo);
	});

	const onDragEnd = (results) => {
		if (results.source && results.destination) {
			dispatch(
				reorderIssues(
					selectedRepo.id,
					results.source.index,
					results.destination.index
				)
			);
		}
	};

	const getIssueList = (issues) => {
		return issues.issues.map((i, idx) => (
			<Draggable key={i.id} draggableId={`${i.id}`} index={idx}>
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
					>
						<Issue
							key={i.id}
							title={i.title}
							avatar_url={i.assignee ? i.assignee.avatar_url : null}
							created={i.created_at}
							updated={i.updated_at}
						/>
					</div>
				)}
			</Draggable>
		));
	};

	return (
		<div className='issueList'>
			{!!issues && issues.issues.length ? (
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId='droppable'>
						{(provided, snapshot) => (
							<div {...provided.droppableProps} ref={provided.innerRef}>
								{getIssueList(issues)}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			) : loading ? (
				<h1>Loading...</h1>
			) : (
				<h1>No issues for this repository</h1>
			)}
		</div>
	);
};

export default IssueList;
