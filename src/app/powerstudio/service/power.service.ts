import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PowerService {

  constructor(private socket: Socket, private http: HttpClient) { }

  getPowerUsageToday() {
    this.socket.emit('all_power/today');
    let observable = new Observable(observable => {
      this.socket.on('all_power/today', (data) => {
        observable.next(data.power);
      });
    
    })

    return observable;
  }

  getPEA() {
    this.socket.emit('total_pea_power/today');
    let observable = new Observable(observable => {
      this.socket.on('total_pea_power/today', (data) => {
        observable.next(data.energy);
      });
     
    })

    return observable;
  }

  getSolarCell() {
    this.socket.emit('total_solar_power/today');
    let observable = new Observable(observable => {
      this.socket.on('total_solar_power/today', (data) => {
        observable.next(data.energy);
      });
     
    })

    return observable;
  }

  getPowerUsage24hr() {
    return this.http.get<any>('http://localhost:8000/power/all')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);
  }

  getSolarUsage24hr() {
    return this.http.get<any>('http://localhost:8000/power/apis_per_hr/solar/all')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);
  }

  getPEAUsage24hr() {
    return this.http.get<any>('http://localhost:8000/power/apis_per_hr/pea/all')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);
  }



  getSolarUsageToday() {
    this.socket.emit('total_solar_power/today');
    let observable = new Observable(observable => {
      this.socket.on('total_solar_power/today', (data) => {
        observable.next(data.energy);
    
      });
     
    })

    return observable;
  }

  getSolarAllDevice() {
    this.socket.emit('solar/all_power/today');
    let observable = new Observable(observable => {
      this.socket.on('solar/all_power/today', (data) => {
        observable.next(data);

      });
    
    })

    return observable;
  }


  getSolar1_24hr() {
    return this.http.get<any>('http://localhost:8000/power/apis_per_hr/solar?device=solar1')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);
  }

  getSolar2_24hr() {
    return this.http.get<any>('http://localhost:8000/power/apis_per_hr/solar?device=solar2')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);
  }

  getSolar3_24hr() {
    return this.http.get<any>('http://localhost:8000/power/apis_per_hr/solar?device=solar3')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);
  }



  getPEAUsageToday() {
    this.socket.emit('total_pea_power/today');
    let observable = new Observable(observable => {
      this.socket.on('total_pea_power/today', (data) => {
        observable.next(data.energy);
       

      });
    
    })

    return observable;
  }

  getMDBAllDevice() {
    this.socket.emit('pea_devices/all_power/today');
    let observable = new Observable(observable => {
      this.socket.on('pea_devices/all_power/today', (data) => {
        observable.next(data);
 
      });
   
    })

    return observable;
  }

  
  getMDB1_24hr() {
    return this.http.get<any>('http://localhost:8000/power/apis_per_hr/pea?device=MDB1')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);
  }
  getMDB2_24hr() {
    return this.http.get<any>('http://localhost:8000/power/apis_per_hr/pea?device=MDB2')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);
  }
  getMDB3_24hr() {
    return this.http.get<any>('http://localhost:8000/power/apis_per_hr/pea?device=MDB3')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);
  }
  getMDB4_24hr() {
    return this.http.get<any>('http://localhost:8000/power/apis_per_hr/pea?device=MDB4')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);
  }
  getMDB5_24hr() {
    return this.http.get<any>('http://localhost:8000/power/apis_per_hr/pea?device=MDB5')
      .toPromise()
      .then(res => res as any[])
      .then(data => data);
  }




}
