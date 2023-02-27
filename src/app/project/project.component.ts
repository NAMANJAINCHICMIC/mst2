import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit , OnChanges, DoCheck, SimpleChanges, AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  public userInfo : any = [];
  
  public url = "http://localhost:3000/data1";
  onStatusChange(data:any){
    
    this.http.put(this.url+"/" + data.id, data).subscribe(datas => {
        console.log(datas);
      });
   
    
  }
  // onStatusUnChange(item:any){
    
  //   // this.http.get(this.url).subscribe((res)=>{
  //   //   this.userInfo=res;
  //   //   console.log(res);
  //   // });
  //   this.userInfo = item;
  //   console.log(item.status)
  // }
  // value!: string;

  // onValueChanged(newValue: any) {
    
  //   this.userInfo.status = newValue;
  // }

  public constructor(private http:HttpClient){this.http.get(this.url).subscribe((res)=>{
      this.userInfo=res;
    });}
 ngOnInit(): void {
     
      this.http.get(this.url).subscribe((res)=>{
        this.userInfo=res;
      });
 

    }


}
