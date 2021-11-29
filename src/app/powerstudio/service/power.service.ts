import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {   Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PowerService {

  constructor(private socket: Socket) { }

  getPowerUsageToday(){
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

  getPEAValue(){
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

  getSolarCellValue(){
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

 

  getInverter1Value(){
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

  getInverter2Value(){
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

  getInverter3Value(){
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

  getMDB1Value(){
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

  getMDB2Value(){
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

  getMDB3Value(){
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

  getMDB4Value(){
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

  getMDB5Value(){
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
