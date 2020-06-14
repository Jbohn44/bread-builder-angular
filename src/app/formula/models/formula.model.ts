import {Ingredient} from './ingredient.model';
import {Instruction} from './instruction.model'

export class Formula {
    FormulaId: number;
    FormulaName: string; // same with the others String??? non primitive?? may be better to use???
    Ingredients: Ingredient[];
    Instructions: Instruction[];

}