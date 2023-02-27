import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent implements OnInit{
  public userInfo : any = [];
 
  public url = "http://localhost:3000/data2";
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