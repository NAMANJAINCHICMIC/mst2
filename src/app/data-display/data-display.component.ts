import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent {
  [x: string]: any;

  @Input()
  data: {
    id:number,
    name: string;
    status: string;
  }[] = [{id: +"",name: "", status: ""}];


  @Input() url = "";

  @Output()
  statusChange : EventEmitter<{item:any }> =new EventEmitter<{item:any }>() 
  onChange(item:any){
    this.statusChange.emit(item);

  }
  constructor(private http:HttpClient) { }


}
