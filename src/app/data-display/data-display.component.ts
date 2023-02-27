import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnChanges{

[x: string]: any;

  selectedValue!: string;
  previousValue!: string;

  @Input()
  data: {
    id:number,
    name: string,
    status: string, 
    message: string
  }[] = [{id: +"",name: "", status: "", message: ""}];


  options = ["active", "pending" , "hold" , "cancelled"];

  @ViewChild('mySelect', { static: true })
  mySelect!: { nativeElement: { value: string; }; };


 


  @Output()
  statusChange : EventEmitter<{item:any }> =new EventEmitter<{item:any }>() 
  // @Output()
  // statusUnChange : EventEmitter<{item:any }> =new EventEmitter<{item:any }>() 

  @Output() valueChanged = new EventEmitter<string>();


  onSelectChange(item:any,newValue: any) {

    console.log(newValue.target.value)
    this.selectedValue = newValue.target.value;
    // this.selectedValue = newValue;

    console.log(this.previousValue)
    console.log(this.selectedValue)
    if(newValue.target.value == "hold" ){

        const msg = prompt("please enter your reason");
        if (msg == null || msg ==""){
    
     
              this.selectedValue = this.previousValue;
        // console.log(this.selectedValue)
        item.status = this.selectedValue
          this.valueChanged.emit(item.status);
       
          newValue.target.value = this.previousValue;
          return ;
        }
        else{
          item.message = msg;
          this.statusChange.emit(item );
          return;
        }
        }
        newValue.target.value = this.selectedValue;
        this.statusChange.emit(item);
    
  }
  onClicked(item:any){
    this.previousValue = item.status
  }

  

  constructor(private http:HttpClient ) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
   
  }

 

}
