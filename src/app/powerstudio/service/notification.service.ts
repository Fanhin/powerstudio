import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private socket: Socket, private http: HttpClient) { }


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

  getAlarmHistory7d() {
    return this.http.get<any>('')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  getAllNotification(){
    let observable = new Observable(observable =>{
      this.socket.on('',(data)=>{
        observable.next(data);
        console.log(data);
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  getAllDevice(){
    let observable = new Observable(observable =>{
      this.socket.on('',(data)=>{
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
