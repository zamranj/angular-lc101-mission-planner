import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  indexOfMemberBeingEdited: number = null;

  constructor() { }

  ngOnInit() {
  }

  add(name: string, firstMission:boolean){
    let out : object = {'name': name, 'firstMission' : firstMission}
    this.crew.push(out)
  }

  remove(member:object){
    let index: number = this.crew.indexOf(member)
    this.crew.splice(index);
  }

  edit(index: number){

    this.indexOfMemberBeingEdited = index;

  }

  save(index:number, newName: string){
    this.crew(index).name = newName;
    this
  }

}
