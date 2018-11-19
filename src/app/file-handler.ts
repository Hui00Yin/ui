import {Observable, merge, bindNodeCallback,bindCallback} from 'rxjs'
import {readFile} from 'fs';

export class FileHandler {
  constructor(private fname: string)
  {
  }

  readFile(): Observable<any>{
    let readfs = bindNodeCallback(readFile);
    return readfs(this.fname);
  }
}
