import { Component } from '@angular/core';
import { DestinationsComponent } from './sections/destinations/destinations.component';
import { PlacesComponent } from './sections/places/places.component';
import { OffersComponent } from './sections/offers/offers.component';
import { PricesComponent } from './sections/prices/prices.component';

@Component({
    selector: 'app-content',
    imports: [DestinationsComponent, PlacesComponent, OffersComponent, PricesComponent],
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
})
export class ContentComponent {}
