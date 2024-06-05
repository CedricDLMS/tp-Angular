import { Component, OnInit } from '@angular/core';
import ColumnService from './services/column.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-columns',
  standalone: true,
  imports: [CommonModule,HttpClientModule,CardsComponent],
  templateUrl: './columns.component.html',
  styleUrl: './columns.component.css',
  providers: [ColumnService]
})
export class ColumnsComponent implements OnInit {

  Columns = this.ColumnService.Columns;
  constructor(private ColumnService : ColumnService){}
  
  ngOnInit(): void {
    this.ColumnService.getColumns().subscribe( column => {
      this.Columns.set(column);
    });
  }

}

