import { Injectable } from '@angular/core';
import Term from '../../Components/terms/model/term.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TermEventService {
  private termSubject : Subject<string> = new Subject<string>();

  public event$ = this.termSubject.asObservable();
  emitTermEvent = (termId : string) => {
    console.log("emitting", termId)
    this.termSubject.next(termId);
    console.log(this.termSubject);

  }
  constructor() { }
}
