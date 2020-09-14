import { User } from './User';
import { Category } from './Category';

export class Recipe {
    constructor(public NameRecipe?:string,public CategoryRecipe?:Category,public Time?:number,
        public Difficulty?:string,public DateAdd?:Date,public Ingredients?:string[],public Preparation?:string[],public UserName?:User,public Image?:string,public View?:boolean){}
        

}