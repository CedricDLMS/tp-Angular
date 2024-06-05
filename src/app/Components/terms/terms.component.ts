import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import TermService from './services/term.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import Term from './model/term.model';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css',
  providers : [TermService]
})
export class TermsComponent implements OnInit {

  Terms = this.TermService.Terms;

  constructor(private TermService : TermService){}
  
  ngOnInit(): void {
    this.TermService.getTerms().subscribe( terms => {
      this.Terms.set(terms);
    });
  }

}
