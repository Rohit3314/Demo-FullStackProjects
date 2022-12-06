import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private s1:EmpService) { }

  ngOnInit(): void {
  }
  insertdata(insertform:{value:any;})
  {
    return this.s1.insertdata1(insertform.value).subscribe();
  }
}
