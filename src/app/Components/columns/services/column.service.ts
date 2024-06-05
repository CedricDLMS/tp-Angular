import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import Column from "../model/column.model";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn : 'root',
})

export default class ColumnService{
    http = inject(HttpClient);
    Columns = signal<Column[]>([]);
    readonly url = "http://localhost:3000/columns";


    getTerms() : Observable<Column[]>{
        return this.http.get<Column[]>(this.url).pipe(
            tap(column => this.Columns.set(column))
          );
    }
}