import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Mdb2Service {

  constructor(private socket: Socket, private http: HttpClient) { }

  getMDB2Info() {
    this.socket.emit('mdb2/general_info');
    let observable = new Observable(observable => {
      this.socket.on('mdb2/general_info', (data) => {
        observable.next(data);


      });


    })
    return observable;
  }
  get3Event() {
    this.socket.emit('alarm');
    let observable = new Observable(observable => {
      this.socket.on('alarm', (data) => {
        observable.next(data);


      });

    })
    return observable;

  }
}
