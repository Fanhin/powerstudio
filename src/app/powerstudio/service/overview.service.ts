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
        console.log(data.onPeak);
        
      });
     
    })

    return observable;
  }

  getOffPeak(){
    this.socket.emit('off_peak/today');
    let observable = new Observable(observable =>{
      this.socket.on('off_peak/today',(data)=>{
        observable.next(data.offPeak.toFixed(2));
       
        
      });
     
    })

    return observable;
  }

  getCostToday(){
    this.socket.emit('cost/today');
    let observable = new Observable(observable =>{
      this.socket.on('cost/today',(data)=>{
        observable.next(data.todayCost.toFixed(2));
       
        
      });
      
    })
    return observable;
  }

  getSaveCostToday(){
    
    
    this.socket.emit('saved_cost/today');
    console.log("savecost emit");
    let observable = new Observable(observable =>{
      this.socket.on('saved_cost/today',(data)=>{
        observable.next(data.todaySavedCost.toFixed(2));
      
        
      });
     
    })
    return observable;
  }

  getAllEnergy(){
    this.socket.emit('all_energy/today');
    let observable = new Observable(observable =>{
      this.socket.on('all_energy/today',(data)=>{
        
        
        observable.next(data.energy.toFixed(2));

  
      });
     
    })
    return observable;
  }

  getPEAAlldevice(){
    this.socket.emit('pea_devices/all_energy/today');
    let observable = new Observable(observable =>{
      this.socket.on('pea_devices/all_energy/today',(data)=>{
        observable.next(data);
     
        
      });
     
    })
    return observable;
  }

  
  getSolarAlldevice(){
    this.socket.emit('solar/all_energy/today');
    let observable = new Observable(observable =>{
      this.socket.on('solar/all_energy/today',(data)=>{
        observable.next(data);
       
        
      });
      
    })
    return observable;
  }


  getComOnlineDevice(){
    this.socket.emit('devices-status=online');
    let observable = new Observable(observable =>{
      this.socket.on('devices-status=online',(data)=>{
        observable.next(data.onlineDevices);
        
        
      });
     
    })
    return observable;
  }

  getComOfflineDevice(){
    this.socket.emit('devices-status=offline');
    let observable = new Observable(observable =>{
      this.socket.on('devices-status=offline',(data)=>{
        observable.next(data.offlineDevices);
        
        
      });
     
    })
    return observable;
  }


  getAlarmEvent(){
    this.socket.emit('event/alarm');
    let observable = new Observable(observable =>{
      this.socket.on('event/alarm',(data)=>{
        observable.next(data);
     
        
      });
    
    })

    return observable;
  }

  getClearEvent(){
    this.socket.emit('event/handled_alarm');
    let observable = new Observable(observable =>{
      this.socket.on('event/handled_alarm',(data)=>{
        observable.next(data);
      
        
      });
     
    })
    return observable;
  }

  
  get3Event(){
    this.socket.emit('alarm');
    let observable = new Observable(observable =>{
      this.socket.on('alarm',(data)=>{
        observable.next(data);
        
        
      });
   
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
