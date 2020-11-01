import { changeState } from './utils';

describe('Task ', () => {
	it('should pass fake test', () => {
		expect(true).toBe(true);
	});

	it('should return true if list > 10', () => {
		const list = [{},{},{},{},{},{},{},{},{},{}]
		const expected = true;

		const responsed = changeState(list);

		expect(responsed).toBe(expected);
	});


});