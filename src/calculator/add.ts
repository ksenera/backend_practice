export default class SimpleAdditionService implements AdditionService {
  add(additionUnits: number[]) {
    let result = 0;
    additionUnits.forEach(x => result = x + result);

    return result;
  }
}

export class ComplexAdditionService implements AdditionService {
  #calcService: CalculationService;

  constructor(calculationService: CalculationService) {
    this.#calcService = calculationService;
  }

  add(additionUnits: number[]): number {
    // take numbers
    // send to remote service for result
    if (additionUnits.length === 0) {
      throw new Error("something something broken")
    }
   
    return this.#calcService.send();
  };
}
class RealCalculationService implements CalculationService {
  send() {
    // reached out to service and does real work
    return 0;
  }
}
class MockedCalculationService implements CalculationService {
  send() {
    return 0;
  }
}
interface CalculationService {
  send: () => number;
}

export interface AdditionService {
  add: (additionUnits: number[]) => number;
}
