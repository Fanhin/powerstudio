import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {  observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private socket: Socket) { }


  getAlarmEvent(){
    let observable = new Observable(observable =>{
      this.socket.on('event/alarm',(data)=>{
        observable.next(data);
        console.log(data);
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getClearEvent(){
    let observable = new Observable(observable =>{
      this.socket.on('event/handled_alarm',(data)=>{
        observable.next(data);
        console.log(data);
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }
}
