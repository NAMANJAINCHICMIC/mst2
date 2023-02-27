import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnChanges{
  // [x: string]: any;
  

  @Input()
  data: {
    id:number,
    name: string,
    status: string, 
    message: string
  }[] = [{id: +"",name: "", status: "", message: ""}];


  // @Input() url = "";

  @Output()
  statusChange : EventEmitter<{item:any }> =new EventEmitter<{item:any }>() 
  @Output()
  statusUnChange : EventEmitter<void> =new EventEmitter<void>() 
  onChange(item:any){
    if(item.status == "hold" ){
    const msg = prompt("please enter your reason");
    if (msg == null || msg ==""){
      const changeBool = false;
      // window.location.reload();
      
      this.statusUnChange.emit();
      return ;
    }
    else{
      item.message = msg;
      this.statusChange.emit(item );
      return;
    }
    }
    
    this.statusChange.emit(item);

  }
  constructor(private http:HttpClient) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // if(this.statusUnChange){
    //   console.log("hello")
    //   changes['data'].currentValue = changes['data'].previousValue;
    // }
   
    
    // throw new Error('Method not implemented.');
  }
  

 

}
