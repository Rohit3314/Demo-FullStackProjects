import { Component, OnInit } from '@angular/core';
import { AccService } from '../acc.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private acc1:AccService) { }

  ngOnInit(): void {
  }
  insertdata(insertform:{value:any;})
  {
  return  this.acc1.insertdata1(insertform.value).subscribe();
  }
}
