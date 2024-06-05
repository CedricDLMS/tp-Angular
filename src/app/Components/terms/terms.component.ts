import { Component, OnInit, inject } from '@angular/core';
import TermService from './services/term.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  Terms : Terms[] = [];


  ngOnInit(): void {
    this.TermService.getTerms().subscribe();
  }
  constructor(private TermService : TermService){
    this.loadTerms = ()=>{return this.TermService.Terms;}; 
  }
  loadTerms: () => Observable<Term[]>;

  private TermService = inject(TermService);
}
