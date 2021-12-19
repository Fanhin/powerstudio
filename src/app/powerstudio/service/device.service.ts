// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DeviceService {

//   constructor() { }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient,private socket: Socket) { }


  getComOnlineDevice(){
    this.socket.emit('devices-status=online');
    let observable = new Observable(observable =>{
      this.socket.on('devices-status=online',(data)=>{
        observable.next(data.onlineDevices);
        console.log(data);
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  getComOfflineDevice(){
    this.socket.emit('devices-status=offline');
    let observable = new Observable(observable =>{
      this.socket.on('devices-status=offline',(data)=>{
        observable.next(data.offlineDevices);
        console.log(data);
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  getComDevicesHistoryLabelLast7d(){

  }

  getComDevicesHistory(){
    this.socket.emit('');
    let observable = new Observable(observable =>{
      this.socket.on('',(data)=>{
        observable.next(data.onlineDevices);
        console.log(data);
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }










 

}
