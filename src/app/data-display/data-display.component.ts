import { Component, Input, OnInit } from '@angular/core';
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
  public selectedStatus : any;
  onSelected(value:string , sts:string):void{
    // this.selectedStatus= value;
    sts = value;
    // this.data=value;
  }
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe((res)=>{
      this.selectedStatus = res;
    })

  }
}
