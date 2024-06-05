import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import TermService from './services/term.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import Term from './model/term.model';
import CardService from '../cards/services/cards.service';
import { TermEventService } from '../../services/events/term-event.service';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css',
  providers : [TermService, CardService, TermEventService]
})
export class TermsComponent implements OnInit {

  Terms = this.TermService.Terms;

  constructor(private TermService : TermService, private cardService : CardService, private termEventService : TermEventService){}
  
  ngOnInit(): void {
    this.TermService.getTerms().subscribe( terms => {
      this.Terms.set(terms);
    });
  }

  handleClickTerm(termId : string){
    console.log("handle clik")
    this.termEventService.emitTermEvent(termId);
  }

  // onTermSelect(termId : string){
  //   this.cardService.filtering(termId).subscribe(card => {
  //     console.log(card);
  //     this.cardService.Cards.set(card);
  //   })
  // }

}
