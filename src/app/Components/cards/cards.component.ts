import { Component, Input, OnInit, input, signal } from '@angular/core';
import CardService from './services/cards.service';
import Card from './model/card.model';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  providers : [CardService]
})
export class CardsComponent implements OnInit {
  Cards = signal<Card[]>([]);

  @Input() columnId! : string;

  constructor(private CardService : CardService){}

  ngOnInit(): void {
    if(this.columnId){
      this.CardService.getCards().subscribe(cards => {
        const id = this.columnId;
        const filteredCards = cards.filter(card => card.column === id);
        console.log(filteredCards);
        this.Cards.set(filteredCards);
      });
    }else{
      console.error("pas de carte avec cet Id : ", this.columnId)
    }
  }
}
