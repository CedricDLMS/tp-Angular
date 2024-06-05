import { Component, OnInit } from '@angular/core';
import CardService from './services/cards.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  providers : [CardService]
})
export class CardsComponent implements OnInit {
  Cards = this.CardService.Cards;

  constructor(private CardService : CardService){}
  
  ngOnInit(): void {
    this.CardService.getCards().subscribe
  }
}
