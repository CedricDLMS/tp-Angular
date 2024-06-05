import { Inject, Injectable, inject, signal } from "@angular/core";
import Card from "../model/card.model";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";

@Injectable({
    providedIn : 'root',
})
export default class CardService{
    Cards = signal<Card[]>([]);
    http = inject(HttpClient);
    readonly url = "http://localhost:3000/cards";

    getCards(){
        return this.http.get<Card[]>(this.url).pipe(tap( card => this.Cards.set(card)));
    }
}