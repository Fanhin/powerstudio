import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Mdb1Service {

  constructor(private socket: Socket,private http: HttpClient) { }

 

  

  
}
