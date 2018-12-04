import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of, merge, Observable, Subject, timer} from 'rxjs';
import {delay, flatMap, switchMap, share, shareReplay, map, takeUntil, filter} from 'rxjs/operators';

export interface SomeData {
    id: number;
    data: any;
}

export interface SomeDataResponse {
    type: string;
    value: SomeData;
}

const API_ENDPOINT = 'https://api.icndb.com/jokes/random/5?limitTo=[nerdy]';
const CACHE_SIZE = 1;

export class ActionsWithTimer{
  private _timer$: Observable<{}> = null;
  private _open$ = new Subject<void>(); 
  private _close$ = new Subject<void>(); 
  
  private createTimerStream(start: number = 0, interval: number=10){
    this._timer$ = timer(start, interval);  
    return this._timer$;
  }

  public refreshStream(){
    return this._open$.pipe(
      switchMap(() => this.createTimerStream()),
      takeUntil(this._close$),
      share()
    );
  }

  public openTimer(){
    this._open$.next();
  }

  public closeTimer(){
    this._close$.next();
  }


  public ResetTimerIfOpen(){
  }

}

export interface SimpleCache{
   data: any;
}

@Injectable({
  providedIn: 'root'
})

export class DataCacheService {
  private _cache$: Observable<SomeData> = null;
  private memory: Map<string, SimpleCache> = new Map<string, SimpleCache>();

  constructor(private http: HttpClient) {
  
  }

  getCacheData(key:string, expire?: number){
    if(!this.memory.has(key)){
      const cache$ = this.requestData();
      const stop$ = Observable.create((observer) => {
        expire?observer.next(expire):observer.next(null);
      }).pipe(
        filter(expire => typeof expire === 'number'),
        delay(expire)
      );

      cache$.pipe(takeUntil(stop$))
        .subscribe((data) => {
          this.memory.set(key, data);
        });

      stop$.subscribe(_ => {
        this.memory.delete(key);
      });
    }

    return this.memory.get(key).data;
  }
    
  private requestData(): Observable<SomeData> {
    return this.http.get(API_ENDPOINT).pipe(
      map((response: SomeDataResponse) => response.value)
    );
  }

}
