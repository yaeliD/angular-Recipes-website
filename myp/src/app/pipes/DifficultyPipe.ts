import{Pipe,PipeTransform} from"@angular/core"
@Pipe({
    name:"DifficultyPipe"
})
export class DifficultyPipe implements PipeTransform{
transform(value:number):string
{
    let ReturnValue:string="";
   for(let i=0;i<value;i++)
   {
    ReturnValue+="*";
   }
  
   return ReturnValue;
}
}
