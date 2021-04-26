import React from 'react';
import {screen, render,cleanup} from '@testing-library/react';

import Task from './Task';

const task = {
    'id': '1',
    'title': 'test text',
    'state': ''
};
const onArchiveTask = () => {
};
const onPinTask = () => {
};
afterEach(cleanup);

describe('Task page', () => {

    it('Should match snapshot', () => {
        const {asFragment} = render(<Task task={task} onArchiveTask={onArchiveTask} onPinTask={onPinTask}/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should use text be default that is sending in prop", () => {

        const onArchiveTask = jest.fn();
        const onPinTask = jest.fn();

        const { getByTestId } = render(
            <Task task={task}
            onArchiveTask={onArchiveTask}
            onPinTask={onPinTask}
            />
        );

        expect(getByTestId("text-input-title").value).toBe('test text');

    });



});