import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import Term from '../model/term.model';

@Injectable({
    providedIn : 'root',
})

export default class TermService{
    http = inject(HttpClient);
    Terms = signal<Term[]>([]);
    readonly url = "http://localhost:3000/terms";


    getTerms() : Observable<Term[]>{
        return this.http.get<Term[]>(this.url).pipe(
            tap(Term => this.Terms.set(Term))
          );
    }

}