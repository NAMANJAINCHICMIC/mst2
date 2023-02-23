import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
// @Input() data:[];
data1 = [
  {
  name : 'yahoo',
  status: 'active'
},
  {
  name : 'timetravel',
  status: 'active'
},
  {
  name : 'pizza',
  status: 'active'
}]
constructor(){}
}
