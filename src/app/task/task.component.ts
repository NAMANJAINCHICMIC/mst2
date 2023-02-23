import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  public userInfo : any;
  public constructor(private http:HttpClient){}
  public ngOnInit(): void {
      const url: string = 'http://localhost:3000/data3';
      this.http.get(url).subscribe((res)=>{
        this.userInfo=res;
      })
  }

}