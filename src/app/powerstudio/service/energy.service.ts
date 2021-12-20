import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnergyService {

  constructor(private socket: Socket, private http: HttpClient) { }

  


  //top chart span value
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
//socket io and rest ////////div 1
  // getPowerUsageToday() {
  //   let observable = new Observable(observable => {
  //     this.socket.on('', (data) => {
  //       observable.next(data);
  //     });
  //   })
  //   return observable;
  // }

  getPEA(){
    this.socket.emit('total_pea_energy/today');
    let observable = new Observable(observable =>{
      this.socket.on('total_pea_energy/today',(data)=>{
        observable.next(data.energy.toFixed(2));
        
        
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

  

  getSolar(){
    this.socket.emit('total_solar_energy/today');
    let observable = new Observable(observable =>{
      this.socket.on('total_solar_energy/today',(data)=>{
       
      
        
        observable.next(data.energy.toFixed(2));
       
      });
      return ()=>{
        this.socket.disconnect();
      }
    })
    return observable;
  }

 

  getSumPEA24hr() {
    return this.http.get<any>('http://localhost:8000/energy/all_energy_per_hr/pea/all')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);
  }

  
  getSumSolar24hr() {
    return this.http.get<any>('http://localhost:8000/energy/all_energy_per_hr/solar/all')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);
  }
  

  

  //div2
  //getSumSolar24hr

  

  getSolar1() {
    return this.http.get<any>('http://localhost:8000/energy/all_energy_per_hr/solar?device=solar1')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);
  }
  getSolar2() {
    return this.http.get<any>('http://localhost:8000/energy/all_energy_per_hr/solar?device=solar2')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);
  }
  getSolar3() {
    return this.http.get<any>('http://localhost:8000/energy/all_energy_per_hr/solar?device=solar3')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);
  }




  getMDB1(){
    return this.http.get<any>('http://localhost:8000/energy/all_energy_per_hr/pea?device=MDB1')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);

  }
  getMDB2(){
    return this.http.get<any>('http://localhost:8000/energy/all_energy_per_hr/pea?device=MDB2')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);

  }
  getMDB3(){
    return this.http.get<any>('http://localhost:8000/energy/all_energy_per_hr/pea?device=MDB3')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);

  }
  getMDB4(){
    return this.http.get<any>('http://localhost:8000/energy/all_energy_per_hr/pea?device=MDB4')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);

  }
  getMDB5(){
    return this.http.get<any>('http://localhost:8000/energy/all_energy_per_hr/pea?device=MDB5')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);

  }

  


 

  //div 3


  
  }

  //div 4

  







