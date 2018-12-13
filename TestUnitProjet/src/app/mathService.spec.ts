import { MathService } from './mathService';

describe('MyServiceService', () => {
    it('La méthode incrementCount doit incrémenter la propriété count', () => {
        // Instanciation du mathService
        let mathService = new MathService();

        // Premier incrément
        mathService.incrementCount();
        expect(mathService.count).toEqual(1);

        // Second incrément
        mathService.incrementCount();
        expect(mathService.count).toEqual(2);

    });
});
