import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

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

  public constructor(private http:HttpClient){}
  public ngOnInit(): void {
     
      this.http.get(this.url).subscribe((res)=>{
        this.userInfo=res;
      });
   

    }
}
