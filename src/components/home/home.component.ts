import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {}

  redirectTo(){
    this.router.navigate(['/contact'])
  }
}
