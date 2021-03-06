
import React from 'react';
import PropTypes from 'prop-types';

import Task from '../task/Task.styled';
import { connect } from 'react-redux';
import { archiveTask, pinTask } from '../../lib/redux';

export function  PureTaskList({className, loading, tasks, onPinTask, onArchiveTask }) {

	const events = {
		onPinTask,
		onArchiveTask,
	};

	if (loading) {
		return <div className={className + " list-items"}>loading</div>;
	}

	if (tasks.length === 0) {
		return <div className={className + " list-items"}>empty</div>;
	}

	return (
		<div className={className + " list-items"}>
			{tasks.map(task => (
				<Task key={task.id} task={task} {...events} />
			))}
		</div>
	);

}

PureTaskList.propTypes = {
	loading: PropTypes.bool,
	onPinTask: PropTypes.func.isRequired,
	onArchiveTask: PropTypes.func.isRequired,
};

PureTaskList.defaultProps = {
	loading: false,
};

export default connect(
	({ tasks }) => ({
		tasks: tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
	}),
	dispatch => ({
		onArchiveTask: id => dispatch(archiveTask(id)),
		onPinTask: id => dispatch(pinTask(id)),
	})
)(PureTaskList);