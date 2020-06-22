import { getTextTimeframe } from './DateUtils';

describe('timeframe', () => {
	it('shows singular years', () => {
		const val = getTextTimeframe(new Date('7/24/2019'), new Date('7/24/2020'));
		expect(val).toBe('1 year ago');
	});
	it('shows plural years', () => {
		const val = getTextTimeframe(new Date('7/24/2018'), new Date('7/24/2020'));
		expect(val).toBe('2 years ago');
	});
	it('shows singular days', () => {
		const val = getTextTimeframe(new Date('7/24/2020'), new Date('7/25/2020'));
		expect(val).toBe('1 day ago');
	});
	it('shows plural days', () => {
		const val = getTextTimeframe(new Date('7/24/2020'), new Date('7/26/2020'));
		expect(val).toBe('2 days ago');
	});
	it('shows singular hours', () => {
		const val = getTextTimeframe(new Date('7/24/2020'), new Date('7/24/2020').setHours(1));
		expect(val).toBe('1 hour ago');
	});
	it('shows plural hours', () => {
		const val = getTextTimeframe(new Date('7/24/2020'), new Date('7/24/2020').setHours(2));
		expect(val).toBe('2 hours ago');
	});
	it('shows singular min', () => {
		const val = getTextTimeframe(new Date('7/24/2020'), new Date('7/24/2020').setMinutes(1));
		expect(val).toBe('1 minute ago');
	});
	it('shows plural min', () => {
		const val = getTextTimeframe(new Date('7/24/2020'), new Date('7/24/2020').setMinutes(2));
		expect(val).toBe('2 minutes ago');
	});
	it('shows less than a min', () => {
		const val = getTextTimeframe(new Date('7/24/2020'), new Date('7/24/2020').setSeconds(59));
		expect(val).toBe('less than 1 min ago');
	});
});