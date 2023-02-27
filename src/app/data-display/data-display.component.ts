import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnChanges{


  @Input()
  data: {
    id:number,
    name: string,
    status: string, 
    message: string
  }[] = [{id: +"",name: "", status: "", message: ""}];


  options = ["active", "pending" , "hold" , "cancelled"];



  @Output()
  statusChange : EventEmitter<{item:any }> =new EventEmitter<{item:any }>() 




  onSelectChange(item:any, Event:any) {

      if(Event.target.value=="hold"){
        let msg = prompt("please enter your reason");
        if (msg === null || msg ==""){
         Event.target.value=item.status;
        
        }  
        else{
          item.message = msg;
          item.status=Event.target.value;
          this.statusChange.emit(item );
          return;
        }
        }
        else {
          item.status=Event.target.value;
          this.statusChange.emit(item );
        }
      
        

    
  }
  onClicked(item:any,Event :any ){
    if(Event.target.value=="hold"){
    let msg = prompt("please enter your reason");
    if (msg === null || msg ==""){
     Event.target.value=item.status
    }
  }
  }

  

  constructor(private http:HttpClient ) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
   
  }

 

}
