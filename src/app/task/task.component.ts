import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  public userInfo : any = [];
  
  public url = "http://localhost:3000/data3";
  onStatusChange(data:any){
    
    this.http.put(this.url+"/" + data.id, data).subscribe(datas => {
        console.log(datas);
      });
    
  }
  // onValueChanged(newValue: any) {
  
  //   this.userInfo.status = newValue;
  // }

  public constructor(private http:HttpClient){}
  public ngOnInit(): void {
     
      this.http.get(this.url).subscribe((res)=>{
        this.userInfo=res;
      });
   

    }
}