import SimpleAdditionService, {ComplexAdditionService} from "./add";
import { AdditionService } from "./add";

describe('addition', () => {

  test('when the two inputs are added, the expected value is returned', () => {
// start
   const additionService: AdditionService  = new SimpleAdditionService()
   // const additionService: AdditionService  = new ComplexAdditionService()
   const var1 = 100;
   const var2 = 1000;

   const result = additionService.add([var1, var2]);

   expect(result).toBe(var1 + var2);
    // end
  });
  test.todo('there should be an error if the calculated value is incorrect')
  test.todo('the param should be numbers');
  test.todo('the param should not be string');
});
