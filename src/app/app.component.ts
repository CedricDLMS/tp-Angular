import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TermsComponent } from "./Components/terms/terms.component";
import { ColumnsComponent } from './Components/columns/columns.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TermsComponent,ColumnsComponent]
})
export class AppComponent {
  title = 'tp-Angular';
}
