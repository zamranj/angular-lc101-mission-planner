import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:

   addItem(equipment: object):boolean{
     this.cargoHold.push(equipment);
     this.cargoMass += equipment["mass"];
     console.log(this.maximumAllowedMass - this.cargoMass <= 200);
     return this.maximumAllowedMass - this.cargoMass <= 200;
   }

   itemCount(item: string):boolean {
     
     let count = {};
    for(let i=0 ; i<this.cargoHold.length; i++){
      console.log(this.cargoHold[i]);
      if(count[this.cargoHold[i]]){
        count[this.cargoHold[i]] += 1;
      }else{
        count[this.cargoHold[i]] = 1;
      }
    }
    for(let prop in count){
       if(count[prop] > 2){
        console.log("In False: "+ count);
         return true;
       }else{
        console.log(count);
         return false
       }
    }

    

    
   }
   
}
