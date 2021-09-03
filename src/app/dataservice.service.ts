import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

 displayValue(a:number,b:number){
   var c=a+b;
   return c;
 }
 displayMultiply(a:number,b:number){
  var c=a*b;
  return c;
}
displaySubstraction(a:number,b:number){
  var c=a-b;
  return c;
}
displayModulo(a:number,b:number){
  var c=a%b;
  return c;
}


}
