import { Injectable } from '@angular/core';
import {Observable,Subject, BehaviorSubject, combineLatest, Subscription} from 'rxjs'
import {Host, Loading} from './loading';
import {SelectionModel, CollectionViewer, DataSource} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SelectHostService {
  selection: SelectionModel<Host>;
  dataSource: MatTableDataSource<Host>;
  add$: Subject<Host>;
  del$: Subject<Host[]>;
  items: Host[];
  renderItems$: Subject<Host[]>;
  _renderChangesSubscription = Subscription.EMPTY;

  constructor(private loadingService: Loading) { 
    this.selection = new SelectionModel<Host>(true, []);
  }

  newHost(ahost: Host){
    this.add$.next(ahost);
  }

  _updateHostSubscription() {
    const addChanges$ = combineLatest(this.loadingService.GetHostStream(), this.add$.asObservable())
                  .pipe(map((data) => this._addItems(data)));

    const delChanges$ = combineLatest(addChanges$, this.del$.asObservable())
                  .pipe(map((data) => this._delItems(data)));
              
    this._renderChangesSubscription.unsubscribe();
    this._renderChangesSubscription = delChanges$.subscribe(items => this.renderItems$.next(items));
  }

  _addItems(data: (Host[]|Host)[]){
    let itemsAfterAdded = [].concat(data[0]);
    itemsAfterAdded.push(data[1] as Host);
    return itemsAfterAdded;
  }

  _delItems(data: (Host[])[]){
    return [].concat(data[0])
                         .concat(data[1]);
  }

  isAllSelected(){
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;

    return numSelected === numRows;
  }

  allToggle(){
    this.isAllSelected()?
      this.selection.clear():
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  toggleRow(row:any){
    this.selection.toggle(row);
  } 
  
}
