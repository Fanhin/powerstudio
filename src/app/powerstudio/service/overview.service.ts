import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {   Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(private socket: Socket,private http: HttpClient) { }



  getOnPeak(){
    this.socket.emit('on_peak/today');
    let observable = new Observable(observable =>{
      this.socket.on('on_peak/today',(data)=>{
        observable.next(data.onPeak.toFixed(2));
       
      });
      return ()=>{
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getOffPeak(){
    this.socket.emit('off_peak/today');
    let observable = new Observable(observable =>{
      this.socket.on('off_peak/today',(data)=>{
        observable.next(data.offPeak.toFixed(2));
       
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getCostToday(){
    this.socket.emit('cost/today');
    let observable = new Observable(observable =>{
      this.socket.on('cost/today',(data)=>{
        observable.next(data.todayCost.toFixed(2));
       
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  getSaveCostToday(){
    this.socket.emit('saved_cost/today');
    let observable = new Observable(observable =>{
      this.socket.on('saved_cost/today',(data)=>{
        observable.next(data.todaySavedCost.toFixed(2));
      
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  getAllEnergy(){
    this.socket.emit('all_energy/today');
    let observable = new Observable(observable =>{
      this.socket.on('all_energy/today',(data)=>{
        
        
        observable.next(data.energy.toFixed(2));

  
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  getPEAAlldevice(){
    this.socket.emit('pea_devices/all_energy/today');
    let observable = new Observable(observable =>{
      this.socket.on('pea_devices/all_energy/today',(data)=>{
        observable.next(data);
     
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  

  getSolarAlldevice(){
    this.socket.emit('solar/all_energy/today');
    let observable = new Observable(observable =>{
      this.socket.on('solar/all_energy/today',(data)=>{
        observable.next(data);
       
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

 


  getComOnlineDevice(){
    this.socket.emit('devices-status=online');
    let observable = new Observable(observable =>{
      this.socket.on('devices-status=online',(data)=>{
        observable.next(data.onlineDevices);
        
        
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
        
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }


  getAlarmEvent(){
    this.socket.emit('event/alarm');
    let observable = new Observable(observable =>{
      this.socket.on('event/alarm',(data)=>{
        observable.next(data);
     
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getClearEvent(){
    this.socket.emit('event/handled_alarm');
    let observable = new Observable(observable =>{
      this.socket.on('event/handled_alarm',(data)=>{
        observable.next(data);
      
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  getTempEvent(){
    this.socket.emit('alarm');
    let observable = new Observable(observable =>{
      this.socket.on('alarm',(data)=>{
        observable.next(data.temperature.toFixed( 3 ));
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  getHumEvent(){
    this.socket.emit('alarm');
    let observable = new Observable(observable =>{
      this.socket.on('alarm',(data)=>{
        observable.next(data.humidity.toFixed( 3 ));
        
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  getSmokeEvent(){
    this.socket.emit('alarm');
    let observable = new Observable(observable =>{
      this.socket.on('alarm',(data)=>{
        observable.next(data.smokeStatus);
        
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  
  //graph
  getAllPowerMAX24hr(){
    return this.http.get<any>('http://localhost:8000/power/apis_per_hr?date=today')
      .toPromise()
      .then(data => data);
  }

  getPowerUsageToday24hr(){
    return this.http.get<any>('http://localhost:8000/power/apis_per_hr?date=today')
      .toPromise()
      .then(data => data);
  }

  getPowerUsageYesterday24hr(){
    return this.http.get<any>('http://localhost:8000/power/apis_per_hr?date=yesterday')
      .toPromise()

      .then(data => data);
  }

  getEnergyDelta24hr(){
    return this.http.get<any>('http://localhost:8000/energy/all')
    .toPromise()
    .then(data => data);
  }









}
