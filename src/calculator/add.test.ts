import SimpleAdditionService, {ComplexAdditionService} from "./add";
import { AdditionService } from "./add";

describe('addition', () => {

  test('when the two inputs are added, the expected value is returned', () => {
   // start
   const additionService: AdditionService  = new SimpleAdditionService();
   // const additionService: AdditionService  = new ComplexAdditionService()
   const var1 = 100;
   const var2 = 1000;

   const result = additionService.add([var1, var2]);

   expect(result).toBe(var1 + var2);
   // end
  });
  
  // Test for unexpected value being returned 
  test('there should be an error if the calculated value is incorrect', () => {
   const additionService: AdditionService = new SimpleAdditionService();
   const var1 = 100;
   const var2 = 200;
   
   const result = additionService.add([var1, var2]);
   
   // 500 is incorrect to see if this test passes 
   expect(result).toBe(500);
  });

  // Test for valid input types 
  test('the param should be numbers', () => {
   const additionService: AdditionService = new SimpleAdditionService();
   expect(() => additionService.add(["100" as any, 200])).toThrowError
   ('the param should be numbers');
  });
  test.todo('the param should not be string');
});

