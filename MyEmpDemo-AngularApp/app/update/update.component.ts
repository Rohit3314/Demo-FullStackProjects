import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private s1:EmpService) { }

  ngOnInit(): void {
  }
  updatedata(insertform:{value:any;})
  {
    return this.s1.updatedata1(insertform.value).subscribe();
  }
}
