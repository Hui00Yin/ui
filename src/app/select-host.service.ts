import { Injectable } from '@angular/core';
import {Observable,Subject, BehaviorSubject, combineLatest, Subscription, merge, of as observableOf} from 'rxjs'
import {SelectionModel, CollectionViewer, DataSource} from '@angular/cdk/collections';
import {map, withLatestFrom} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

export interface Host {
  hostname: string;
  user:     string;
  password: string;
  cata:     string;
}

const HOST_DATA: Host[] = [
  {hostname: 'howard001', user:'howard', password:'123', cata:'test'},
  {hostname: 'howard002', user:'howard', password:'123', cata:'develop'},
  {hostname: 'howard011', user:'howard', password:'123', cata:'test'},
  {hostname: 'howard012', user:'howard', password:'123', cata:'develop'},
  {hostname: 'howard003', user:'howard', password:'123', cata:'develop'},
  {hostname: 'howard004', user:'howard', password:'123', cata:'develop'},
  {hostname: 'howard005', user:'howard', password:'123', cata:'develop'},
];

@Injectable({
  providedIn: 'root'
})

export class SelectHostService<Host> extends DataSource<Host>{
  public selection: SelectionModel<Host>;
  private add$: BehaviorSubject<Host|null>;
  private del$: BehaviorSubject<Host[]|null>;
  private _renderChangesSubscription = Subscription.EMPTY;
  private _data$: BehaviorSubject<any>;
  private renderItems$ : BehaviorSubject<any>; 

  get data(): Host[] { return this._data$.value;}
  set data(hs: Host[]) { this._data$.next(hs);}

  LoadingFrom(url: string|Host[] ){
    if(typeof url === 'string') 
    {
      this.http.get(url).subscribe((h:Host[]) => this.data = h);
    }
    else{
      this.data = url;
    }
  }

  constructor(private http: HttpClient){
    super();
    this._data$ = new BehaviorSubject<any>(HOST_DATA); 
    this.renderItems$ =  new BehaviorSubject<any>(HOST_DATA);
    this.add$ = new BehaviorSubject<Host|null>(null);
    this.del$ = new BehaviorSubject<Host[]|null>(null);
    this.selection = new SelectionModel<Host>(true, []);
    this._updateHostSubscription();
  }

  newHost(ahost: Host){
    this.add$.next(ahost);
  }

  delHosts(){
    this.del$.next(this.selection.selected);
  }

  _updateHostSubscription() {
    const addChanges$ = this.add$.pipe(
                        withLatestFrom(this._data$),
                        map((data) => this._addItems(data)));

    const delChanges$ = this.del$.pipe(
                        withLatestFrom(this._data$),
                        map((data) => this._delItems(data)));
              
    this._renderChangesSubscription.unsubscribe();
    this._renderChangesSubscription = merge(addChanges$, delChanges$) 
      .subscribe((items) => {
        this._data$.next(items);
        this.renderItems$.next(items);
      });
  }

  _addItems(data: (Host[]|Host)[]){
    let itemsAfterAdded = [].concat(data[1]);
    data[0] && itemsAfterAdded.push(data[0] as Host);
    return itemsAfterAdded;
  }

  _compare(a: Host, b: Host){
    return a && b&& a['user'] === b['user'] && a['hostname'] === b['hostname'] && a['password'] === b['password'] && a['cata'] === b['cata']; } 

  _delItems(data: (Host[])[]){
    let items:Host[] = [].concat(data[1]);  
    console.log("_delItems, all items:", items);
    console.log("_delItems, to be deleted: ",data[0]);
    data[0] && data[0].length > 0 && data[0]
      .map( (h: Host) => {
        items = items.filter((item) => {
          let r =!this._compare(h, item)
          return r;
        } )
      }) 
    
    this.selection.clear();
    return items;
  }

  hasValue(){
    this.selection.hasValue();
  }

  isAllSelected(){
    const numSelected = this.selection.selected.length;
    const numRows = this.data.length;
    console.log("isAllSelected numSelected: ", numSelected);
    console.log("isAllSelected numRows: ", numRows);

    return numSelected === numRows;
  }

  allToggle(){
    this.isAllSelected()?
      this.selection.clear():
      this.data.forEach((row) => {
        console.log("allToggle: ", row);
        return this.selection.select(row)});
  }

  toggleRow(row:any){
    this.selection.toggle(row);
  } 

  connect(){
    return this.renderItems$;
  }

  disconnect(){};
  
}
