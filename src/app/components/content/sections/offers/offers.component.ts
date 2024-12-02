import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
    selector: 'app-offers',
    imports: [CardComponent],
    templateUrl: './offers.component.html',
    styleUrl: './offers.component.scss',
})
export class OffersComponent {}
