import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) { }
   link1 = "http://localhost:9006/insertrecord";
   link2 = "http://localhost:9006/updaterecord";
   link3 = "http://localhost:9006/deleterecord";
   link4 = "http://localhost:9006/viewrecord";
 insertdata1(data:any)
 {
   return this.http.post(this.link1,data);

 }
updatedata1(data:any)
{
  return this.http.post(this.link2,data);
}
deletedata1(data:any)
{
  return this.http.post(this.link3,data);
}

viewrecord()
{
  return this.http.get(this.link4);
}
}
