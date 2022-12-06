import { Component, OnInit } from '@angular/core';
import { AccService } from '../acc.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private s1 :AccService) { }

  ngOnInit(): void {
  }
  updatedata(updateform:{value:any;})
  {
     return this.s1.updatedata1(updateform.value).subscribe();
  }

}
