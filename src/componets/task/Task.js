import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { changeState } from './utils'

export default function Task({className, task: { id, title, state }, onArchiveTask, onPinTask }) {

	useEffect(() => {
		const list = [{id:2},{id:3}];
		console.log(changeState(list))
	}, []);

	return (
		<div className={className + ` list-item ${state}`}>

			{state === 'TASK_ARCHIVED' && (
				<p> Se activo el componente</p>
			)}

			<label className="checkbox">
				<input
					type="checkbox"
					defaultChecked={state === 'TASK_ARCHIVED'}
					disabled={true}
					name="checked"
				/>
				<span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
			</label>
			<div className="title">
				<input type="text" value={title} readOnly={true} placeholder="Input title" />
			</div>

			<div className="actions" onClick={event => event.stopPropagation()}>
				{state !== 'TASK_ARCHIVED' && (
					<a onClick={() => onPinTask(id)}>
						<span className={`icon-star`} />
					</a>
				)}
			</div>
		</div>
	);
}



Task.propTypes = {
	task: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		state: PropTypes.string.isRequired,
	}),
	onArchiveTask: PropTypes.func,
	onPinTask: PropTypes.func,
};