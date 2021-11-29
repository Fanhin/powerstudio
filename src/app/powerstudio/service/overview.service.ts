import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {   Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OverviewService {

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

  getCostToday(){
    let observable = new Observable(observable =>{
      this.socket.on('cost/today',(data)=>{
        observable.next(data);
        console.log(data);
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  getSaveCostToday(){
    let observable = new Observable(observable =>{
      this.socket.on('saved_cost/today',(data)=>{
        observable.next(data);
        console.log(data);
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  getAllEnergy(){
    let observable = new Observable(observable =>{
      this.socket.on('all_energy/today',(data)=>{
        observable.next(data);
        console.log(data);
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }


  getComOnlineDevice(){
    let observable = new Observable(observable =>{
      this.socket.on('device-status=online',(data)=>{
        observable.next(data);
        console.log(data);
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  getComOfflineDevice(){
    let observable = new Observable(observable =>{
      this.socket.on('device-status=offline',(data)=>{
        observable.next(data);
        console.log(data);
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  getComNonInitDevice(){
    let observable = new Observable(observable =>{
      this.socket.on('device-status=non-init',(data)=>{
        observable.next(data);
        console.log(data);
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  //power all chart api
  //power usage vs yesterday chart api
  //Energy all chart api


}
