import { format } from '../src/client/js/date.js';

describe('Test dateString function', () => {
    test('Check the return format', () => {
        const date='2021-03-25';
        expect(format(date)).toEqual('03-25-2021');
    });
});