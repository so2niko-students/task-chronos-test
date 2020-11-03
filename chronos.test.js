const chronos = require('../chronos');

describe('Tests: ', () => {
    it('1, 1, 1 day', () => {
        expect(chronos(1, 1, 1)).toBe('Sunday');
    });
    
    it('1, 8, 24 day', () => {
        expect(chronos(1, 8, 24)).toBe('Tuesday');
    });
    
    it('1, 8, 25 day', () => {
        expect(chronos(1, 8, 25)).toBe('Wednesday');
    });

    it('1000, 1, 20 day', () => {
        expect(chronos(1000, 1, 20)).toBe('Monday');
    });

    it('1000, 2, 30 day', () => {
        expect(chronos(1000, 2, 30)).toBe('Saturday');
    });
    
    it('1001, 8, 23 day', () => {
        expect(chronos(1001, 8, 23)).toBe('Monday');
    });
    
    it('1001, 8, 24 day', () => {
        expect(chronos(1001, 8, 24)).toBe('Tuesday');
    });

    it('2020, 8, 24 day', () => {
        expect(chronos(2020, 8, 24)).toBe('Sunday');
    });

    it('3020, 8, 24 day', () => {
        expect(chronos(3020, 8, 24)).toBe('Sunday');
    });
});


