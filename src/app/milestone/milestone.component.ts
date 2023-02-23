import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent implements OnInit{
  public userInfo : any;
  public constructor(private http:HttpClient){}
  public ngOnInit(): void {
      const url: string = 'http://localhost:3000/data2';
      this.http.get(url).subscribe((res)=>{
        this.userInfo=res;
      })
  }

}
