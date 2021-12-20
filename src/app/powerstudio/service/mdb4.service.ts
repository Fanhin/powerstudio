import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Mdb4Service {

  constructor(private socket: Socket,private http: HttpClient) { }

  getMDB4Info(){
    this.socket.emit('mdb4/general_info');
    let observable = new Observable(observable =>{
      this.socket.on('mdb4/general_info',(data)=>{
        observable.next(data);
        
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }
}
