import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
  [x: string]: any;

  @Input()
  data: {
    name: string;
    status: string;
  }[] = [{name: "", status: ""}];


  @Input() url:string = "";
  // public selectedStatus : any;
  onSelected(value:string , sts:string):void{
    // this.selectedStatus= value;
    sts = value;
    // this.data=value;
    // this.http.put(this.url , this.data).subscribe(datas => {
    //   console.log(datas);
    // });
  }
  @Output()
  statusChange : EventEmitter<{index:string , value: string}> =new EventEmitter<{index:string , value: string}>() 
  onChange(index:string , value: string){
    this.statusChange.emit({index:index , value: value})
  }
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // this.http.get(this.url).subscribe((res)=>{
    //   this.selectedStatus = res;
    // })

  }
}
