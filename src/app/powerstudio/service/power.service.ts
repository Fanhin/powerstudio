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
    let observable = new Observable(observable => {
      this.socket.on('', (data) => {
        observable.next(data);
        console.log(data);

      });
      return () => {
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getPEA() {
    let observable = new Observable(observable => {
      this.socket.on('', (data) => {
        observable.next(data);
        console.log(data);

      });
      return () => {
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getSolarCell() {
    let observable = new Observable(observable => {
      this.socket.on('', (data) => {
        observable.next(data);
        console.log(data);

      });
      return () => {
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getPowerUsage24hr() {
    return this.http.get<any>('')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  getSolarUsage24hr() {
    return this.http.get<any>('')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  getPEAUsage24hr() {
    return this.http.get<any>('')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }



  getSolarUsageToday() {
    let observable = new Observable(observable => {
      this.socket.on('', (data) => {
        observable.next(data);
        console.log(data);

      });
      return () => {
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getSolar1() {
    let observable = new Observable(observable => {
      this.socket.on('', (data) => {
        observable.next(data);
        console.log(data);

      });
      return () => {
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getSolar2() {
    let observable = new Observable(observable => {
      this.socket.on('', (data) => {
        observable.next(data);
        console.log(data);

      });
      return () => {
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getSolar3() {
    let observable = new Observable(observable => {
      this.socket.on('', (data) => {
        observable.next(data);
        console.log(data);

      });
      return () => {
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getSolar1_24hr() {
    return this.http.get<any>('')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  getSolar2_24hr() {
    return this.http.get<any>('')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

  getSolar3_24hr() {
    return this.http.get<any>('')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }



  getPEAUsageToday() {
    let observable = new Observable(observable => {
      this.socket.on('', (data) => {
        observable.next(data);
        console.log(data);

      });
      return () => {
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getMDB1() {
    let observable = new Observable(observable => {
      this.socket.on('', (data) => {
        observable.next(data);
        console.log(data);

      });
      return () => {
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getMDB2() {
    let observable = new Observable(observable => {
      this.socket.on('', (data) => {
        observable.next(data);
        console.log(data);

      });
      return () => {
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getMDB3() {
    let observable = new Observable(observable => {
      this.socket.on('', (data) => {
        observable.next(data);
        console.log(data);

      });
      return () => {
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getMDB4() {
    let observable = new Observable(observable => {
      this.socket.on('', (data) => {
        observable.next(data);
        console.log(data);

      });
      return () => {
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getMDB5() {
    let observable = new Observable(observable => {
      this.socket.on('', (data) => {
        observable.next(data);
        console.log(data);

      });
      return () => {
        this.socket.disconnect();
      }
    })

    return observable;
  }

  getMDB1_24hr() {
    return this.http.get<any>('')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }
  getMDB2_24hr() {
    return this.http.get<any>('')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }
  getMDB3_24hr() {
    return this.http.get<any>('')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }
  getMDB4_24hr() {
    return this.http.get<any>('')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }
  getMDB5_24hr() {
    return this.http.get<any>('')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }




}
