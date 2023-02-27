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


  ngAfterViewInit() {
    // this.previousValue = this.mySelect.nativeElement.value;
  }


  @Output()
  statusChange : EventEmitter<{item:any }> =new EventEmitter<{item:any }>() 
  @Output()
  statusUnChange : EventEmitter<{item:any }> =new EventEmitter<{item:any }>() 

  @Output() valueChanged = new EventEmitter<string>();

  // onChange(item:any,selectElement: HTMLSelectElement){
  //   if(item.status == "hold" ){
  //   const msg = prompt("please enter your reason");
  //   if (msg == null || msg ==""){

  //     // window.location.reload();
  //     // document.getElementById("myForm").reset();
  //     // item.status.reset();
  //     // this.statusUnChange.emit();
  //     // this.mySelect.nativeElement.value = this.previousValue;
  //     // selectElement.value = this.previousValue;
  //     // this.selectedValue = this.previousValue;
  //     // this.resetValue();
  //     return ;
  //   }
  //   else{
  //     item.message = msg;
  //     this.statusChange.emit(item );
  //     return;
  //   }
  //   }
    
  //   this.statusChange.emit(item);

  // }


  onSelectChange(item:any,newValue: string) {

    // this.previousValue =  item.status ?? this.selectedValue;
    // this.previousValue = this.selectedValue;
    this.selectedValue = newValue;
    // console.log(item.status)
    console.log(this.previousValue)
    console.log(this.selectedValue)
    if(newValue == "hold" ){

        const msg = prompt("please enter your reason");
        if (msg == null || msg ==""){
    
     
              this.selectedValue = this.previousValue;
        // console.log(this.selectedValue)
        item.status = this.selectedValue
          this.valueChanged.emit(item.status);
          //  this.statusUnChange.emit(item);
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
  onClicked(item:any){
    this.previousValue = item.status
  }

  

  constructor(private http:HttpClient ) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
   
  }

 

}
