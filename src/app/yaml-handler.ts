import {Observable, merge, bindNodeCallback,bindCallback} from 'rxjs'
import {filter, first, mergeMap, switchMap} from 'rxjs/operators';
import * as yaml from 'js-yaml';
import {HttpClient } from '@angular/common/http';

export class YamlHandler{
  private info: any;

  constructor(private http: HttpClient,private fname: string){
  }

  loadFile() {
    return this.http.get<string>(this.fname)
    .pipe(
      switchMap( (fr) => {
        this.info = yaml.safeLoad(fr);
        console.log(JSON.stringify(this.info, null, 4));
        return this.info;
      })
    )
  }
}
