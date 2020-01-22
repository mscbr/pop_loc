import * as date from '../../helpers/date';


describe('display24time', () => {
    test('24formatTest', () => {
        const testDate = new Date(2019, 8, 23, 10, 33, 30, 0);
        expect(date.display24time(testDate)).toBe('10:33');
    });
});
