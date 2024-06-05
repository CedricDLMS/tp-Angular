import { Component, Input, OnChanges, OnInit, SimpleChanges, input, signal } from '@angular/core';
import CardService from './services/cards.service';
import Card from './model/card.model';
import { TermEventService } from '../../services/events/term-event.service';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  providers : [CardService, TermEventService]
})
export class CardsComponent implements OnInit {
  Cards! : Card[];

  @Input() columnId! : string;

  constructor(private CardService : CardService, private termEventService : TermEventService){}
  
  // ngOnChanges(changes: SimpleChanges): void {
  //   if(changes.TermsId){
      
  //   }
  // }
  ngOnInit(): void {
    
      this.CardService.getCards().subscribe(cards => {
        // const id = this.columnId;
        const filteredCards = cards.filter(card => card.column === this.columnId);
        console.log(filteredCards);
        this.Cards = filteredCards;
      });

    this.termEventService.event$.subscribe({
      next : (termId)=> {
        console.log('card');
        this.Cards = this.Cards.filter(card => {
          return card.termId === termId;
        })
      }
    })
  }
  
}
