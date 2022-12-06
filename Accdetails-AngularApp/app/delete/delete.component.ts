import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit } from '@angular/core';
import { AccService } from '../acc.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private s1:AccService) { }

  ngOnInit(): void {
  }
  
  deletedata(deleteform:{value:any;})
  {
     return this.s1.deletedata1(deleteform.value).subscribe();
  }
}
