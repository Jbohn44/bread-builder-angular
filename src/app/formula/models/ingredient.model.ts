import { Measurement } from './measurement.model';

export class Ingredient {
    IngredientId: number;
    IngredientName: string; //this may be better as String non primitive type ???
    FormulaId: number;
    Measurement: Measurement;
    
}