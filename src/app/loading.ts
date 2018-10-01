import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs'

export interface Host {
  hostname: string;
  user:     string;
  password: string;
  cata:     string;
}
const HOST_DATA: Host[] = [
  {hostname: 'howard001', user:'howard', password:'123', cata:'test'},
  {hostname: 'howard002', user:'howard', password:'123', cata:'develop'},
];

@Injectable()
export class Loading {
  private _hosts: BehaviorSubject<Host[]> = new BehaviorSubject<Host[]>(HOST_DATA);

  get hosts(): Host[] { return this._hosts.value;}
  set hosts(hs: Host[]) { this._hosts.next(hs);}

  constructor(private http: HttpClient){}

  GetHostStream():Observable<Host[]>{
    return this._hosts.asObservable();
  }

  LoadingFrom(url: string|null ){
    url && this.http.get(url).subscribe((data:Host[]) => this.hosts = data );
  }
}


