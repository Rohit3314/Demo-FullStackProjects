import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private s1:EmpService) { }

  ngOnInit(): void {
  }
    deletedata(insertform:{value:any})
    {
      return this.s1.deletedata1(insertform.value).subscribe();
    }

}
