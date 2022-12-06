import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
data:any;
  constructor(private s1:EmpService) { }

  ngOnInit(): void {
   let response = this.s1.viewrecord();
   response.subscribe((data1)=> this.data=data1)

  }

}
