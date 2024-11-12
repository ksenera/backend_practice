// adhere to open/closed principle extending functionality without modifying existing code 
//
import { AdditionService } from "./add";

interface WeightedNumber {
	value: number;
	weight: number;
}
