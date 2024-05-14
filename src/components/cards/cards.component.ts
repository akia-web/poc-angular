import { Component } from '@angular/core';
import { cardsDto } from '../../models/cards.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent  {
  
  tableauCards: cardsDto[] = [
    {title: 'Carte 1', description: 'Description de la carte 1'},
    {title: 'Carte 2', description: 'Description de la carte 2'}
  ]  

}
