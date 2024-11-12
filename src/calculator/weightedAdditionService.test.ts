import { WeightedAdditionService } from "./weightedAdditionService";

describe('WeightedAdditionService', () => {
	test('should return correct result', () => {
		const weightedService = new WeightedAdditionService();
		const weightedNumbers - [
			{ value: 10, weight: 1 },
			{ value: 20, weight: 2 }
		];
	const result = weightedService.add(weightedNumbers);
	expect(result).toBe(10 * 1 + 20 * 2); 
});
