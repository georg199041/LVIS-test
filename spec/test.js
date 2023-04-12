import { Calculate } from '../index.js';

describe('Constraints', function() {
    it('case 1', function() {
        const sticks = [1, 5, 12];
        const N = sticks.length;
        const K = 13
        expect(Calculate(sticks, N, K)).toBe(2);
    });

    it('case 2', function() {
        const sticks = [1, 14, 30, 17];
        const N = sticks.length;
        const K = 68
        expect(Calculate(sticks, N, K)).toBe(4);
    });

    it('case 3', function() {
        const sticks = [13, 17, 43, 100, 110, 120];
        const N = sticks.length;
        const K = 109
        expect(Calculate(sticks, N, K)).toBe(-1);
    });
});