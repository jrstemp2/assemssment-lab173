import { Component, OnInit } from '@angular/core';
import { CSHOFService } from '../cshof.service';
import { FamousPeople } from '../interfaces/famousPeople';

import * as data from '../famousPeople.json';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.scss']
})
export class FamousPeopleComponent implements OnInit {
  famousPeople: FamousPeople[] = [];
  
  


  addPer = function(p: FamousPeople):void {
    
    this.famousPeople.push(p);
    //this.showAddForm = false;
  }

  
  constructor(private fpService: CSHOFService) { }
  
  people: any = (data as any).default;

  


  //people: any[] =[(data as any).default];

  showAddForm:boolean = false;
  showEditForm:boolean = false;

  newFirstName:string = "";
  newLastName:string = "";
  newInnovation:string = "";
  newYear:number = 0;



  //Add Person Here
  addPerson = function():void {
    
    this.people.push({complete: {firstname: this.newFirstName, lastName: this.newLastName, innovation: this.newInnovation, year: this.newYear}});
    //this.showAddForm = false;
  }


  //edit person here





  addFormShow = function() {
    if (this.showAddForm === false)
    {
      this.showAddForm = true;
    }
    else{
      this.showAddForm = false;
    } 
  }

  editFormShow = function() {
    if (this.showEditForm === false)
    {
      this.showEditForm = true;
    }
    else{
      this.showEditForm = false;
    } 
  }


  ngOnInit(): void {
    // this.fpService.getFamousPeople().subscribe(
    //   (data: FamousPeople) => this.famousPeople = { ...data },
    //   error => console.error(error)
    // );
    
  }
}


